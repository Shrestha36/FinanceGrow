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
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("Gemini raw response:", JSON.stringify(data, null, 2));

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({
        message: "Gemini returned empty response",
        raw: data,
      });
    }

    res.json({ advice: text });
  } catch (err) {
    console.error("GEMINI ERROR:", err);
    res.status(500).json({ message: "AI failed" });
  }
};
