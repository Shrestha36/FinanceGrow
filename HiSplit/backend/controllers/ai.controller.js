// controllers/ai.controller.js
import fetch from "node-fetch";

export const getExpenseAdvice = async (req, res) => {
  try {
    const { salary, daily, monthly, totalSpent, savings, currency } = req.body;

    const prompt = `
You are a personal finance assistant.

Salary: ${currency}${salary}
Daily expense: ${currency}${daily}
Monthly expense: ${currency}${monthly}
Total spent: ${currency}${totalSpent}
Savings: ${currency}${savings}

Give exactly 5 short and practical tips to improve savings.
Each tip on a new line.
`;

    const url =
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" +
      process.env.GEMINI_API_KEY;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    const raw = await response.json();

    // 👇 very important debug
    if (!response.ok) {
      console.error("Gemini API error:", raw);
      return res.status(500).json({
        message: "Gemini API error",
        raw,
      });
    }

    const text = raw?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({
        message: "Gemini returned empty response",
        raw,
      });
    }

    res.json({ advice: text });
  } catch (err) {
    console.error("GEMINI ERROR:", err);
    res.status(500).json({ message: "AI failed" });
  }
};
