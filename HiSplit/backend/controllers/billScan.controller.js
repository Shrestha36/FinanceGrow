import { scanBillWithAI } from "../services/aiBillScan.service.js";
import { fileToBase64 } from "../utils/fileToBase64.js";

export const scanBill = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const base64Image = fileToBase64(req.file.buffer);
    const aiResult = await scanBillWithAI(base64Image);

    res.json(aiResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Bill scan failed" });
  }
};
