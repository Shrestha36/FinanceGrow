// controllers/ai.controller.js

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

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2",  
        prompt,
        stream: false,
      }),
    });

    const data = await response.json();

    res.json({
      advice: data.response,
    });
  } catch (err) {
    console.error("OLLAMA AI ERROR:", err);
    res.status(500).json({ message: "AI failed" });
  }
};
