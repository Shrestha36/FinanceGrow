import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import fs from "fs";
import Tesseract from "tesseract.js";
import FormData from "form-data";
import {
  scanBillWithAI,
  scanInvoiceWithAI
} from "../services/aiBillScan.service.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

/* =========================
   OCR HELPERS
========================= */

// ---- Tesseract OCR ----
async function runTesseract(imagePath) {
  try {
    const result = await Tesseract.recognize(imagePath, "eng", {
      tessedit_char_whitelist:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789₹.-xX%",
    });
    return result.data.text || "";
  } catch {
    return "";
  }
}

// ---- PaddleOCR ----
async function runPaddleOCR(imagePath) {
  try {
    const form = new FormData();
    form.append("image", fs.createReadStream(imagePath));

    const response = await fetch("http://127.0.0.1:6000/ocr", {
      method: "POST",
      body: form,
      headers: form.getHeaders(),
    });

    if (!response.ok) return "";

    const json = await response.json();
    return json.text || "";
  } catch {
    return "";
  }
}

// ---- OCR Quality Scoring ----
function scoreOCR(text) {
  if (!text) return 0;
  const prices = text.match(/₹?\d+\.\d{1,2}/g) || [];
  const lines = text.split("\n").filter(l => l.trim().length > 5);
  return prices.length * 2 + lines.length;
}

// ---- Choose Best OCR ----
async function chooseBestOCR(imagePath) {
  const tessText = await runTesseract(imagePath);
  const paddleText = await runPaddleOCR(imagePath);

  const tessScore = scoreOCR(tessText);
  const paddleScore = scoreOCR(paddleText);

  console.log("📊 OCR scores → Tesseract:", tessScore, "Paddle:", paddleScore);

  return paddleScore > tessScore ? paddleText : tessText;
}

// ---- Normalize OCR Text ----
function normalizeBillText(text) {
  return text
    .replace(/[|]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

// ---- Detect Bill Type (CRITICAL) ----
function detectBillType(text) {
  const keywords = [
    "cgst",
    "sgst",
    "igst",
    "gstin",
    "tax invoice",
    "rate",
    "inr"
  ];

  const hits = keywords.filter(k =>
    text.toLowerCase().includes(k)
  ).length;

  return hits >= 2 ? "GST_INVOICE" : "RECEIPT";
}

// ---- Normalize AI Output (FINAL FIX) ----
function normalizeAIResult(aiResult, billType) {
  const items = [];
  let total = 0;

  for (const item of aiResult.items || []) {
    const itemTotal =
      billType === "GST_INVOICE"
        ? Number(item.total || 0)
        : Number(item.net || item.total || 0);

    if (!itemTotal || itemTotal <= 0) continue;

    items.push({
      name: item.name || "Unknown Item",
      category: item.category || item.type || "other",
      total: itemTotal
    });

    total += itemTotal;
  }

  if (aiResult.packaging?.total) {
    total += Number(aiResult.packaging.total);
  }

  return {
    items,
    total: Number(aiResult.grandTotal || total.toFixed(2))
  };
}

/* =========================
   BILL SCAN ROUTE
========================= */

router.post("/", upload.single("bill"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 1️⃣ OCR
    const rawText = await chooseBestOCR(req.file.path);

    // 🔑 Detect bill type BEFORE cleaning text
    const billType = detectBillType(rawText);

    const normalizedText = normalizeBillText(rawText);

    console.log("===== FINAL OCR TEXT =====");
    console.log(normalizedText);
    console.log("📄 Bill Type:", billType);

    if (!normalizedText || normalizedText.length < 10) {
      return res.json({
        success: true,
        rawText: "",
        items: [],
        total: 0,
        aiProcessed: false,
        aiError: "OCR unreadable",
      });
    }

    // 2️⃣ AI Parsing
    let aiResult;
    try {
      aiResult =
        billType === "GST_INVOICE"
          ? await scanInvoiceWithAI(normalizedText)
          : await scanBillWithAI(normalizedText);
    } catch (err) {
      console.error("🧠 AI FAILED:", err.message);
      return res.json({
        success: true,
        rawText: normalizedText,
        items: [],
        total: 0,
        aiProcessed: false,
        aiError: "AI could not parse bill",
      });
    }

    // 3️⃣ Normalize AI Output
    const finalResult = normalizeAIResult(aiResult, billType);

    return res.json({
      success: true,
      billType,
      rawText: normalizedText,
      items: finalResult.items,
      total: finalResult.total,
      aiProcessed: true,
      aiError: null,
    });

  } catch (err) {
    console.error("❌ Bill scan failed:", err.message);
    return res.status(500).json({
      error: "Bill scan failed",
      details: err.message,
    });
  }
});

export default router;
