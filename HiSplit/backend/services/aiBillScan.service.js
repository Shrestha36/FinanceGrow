import fetch from "node-fetch";

const OLLAMA_URL = process.env.OLLAMA_URL;
/* =========================================================
   RECEIPT PARSER (AI-based)
========================================================= */
export async function scanBillWithAI(ocrText, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3",
          temperature: 0,
          stream: false,
          messages: [
            {
              role: "system",
              content: "You output ONLY valid JSON. No explanation."
            },
            {
              role: "user",
              content: `
This is a NORMAL restaurant receipt (NOT a GST invoice).

Rules:
- Item prices are PRE-TAX
- Tax is shown once at the bottom
- Quantity already included
- Categories: veg, non-veg, drink, other

Output:
{
  "items": [{ "name": string, "type": string, "net": number }],
  "tax": number,
  "grandTotal": number
}

OCR TEXT:
${ocrText}
`
            }
          ]
        })
      });

      const data = await response.json();
      const raw = data?.message?.content;
      if (!raw) throw new Error("Empty AI output");

      const parsed = JSON.parse(raw.match(/\{[\s\S]*\}$/)[0]);

      parsed.items = Array.isArray(parsed.items)
        ? parsed.items.map(i => ({
            name: i.name || "Unknown",
            type: i.type || "other",
            net: Number(i.net) || 0
          }))
        : [];

      parsed.tax = Number(parsed.tax) || 0;
      parsed.grandTotal =
        Number(parsed.grandTotal) ||
        parsed.items.reduce((s, i) => s + i.net, 0) + parsed.tax;

      return parsed;

    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  throw new Error("Receipt AI failed");
}

/* =========================================================
   GST INVOICE PARSER (DETERMINISTIC – FIXED)
========================================================= */
export async function scanInvoiceWithAI(ocrText) {
  const lines = ocrText
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean);

  const items = [];
  let grandTotal = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip headers & summary rows
    if (
      /gross|net value|cgst|sgst|igst|rate|inr|item\(s\) total|total value/i.test(
        line
      )
    ) {
      continue;
    }

    // Look for TOTAL column value (last decimal)
    const numbers = line.match(/\d+(\.\d+)?/g);
    if (!numbers || numbers.length < 3) continue;

    const total = Number(numbers[numbers.length - 1]);
    if (!total || total <= 0) continue;

    // Extract item name from LEFT side (before numbers)
    const name = line
      .replace(/\d+(\.\d+)?/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    if (!name || name.length < 3) continue;

    items.push({
      name,
      type: "other",
      total
    });

    grandTotal += total;
  }

  if (!items.length) {
    throw new Error("GST invoice parsing failed");
  }

  return {
    items,
    grandTotal: Number(grandTotal.toFixed(2))
  };
}

