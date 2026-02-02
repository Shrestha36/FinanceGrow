import openai from "../config/openai.js";  

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

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.6,
    });

    res.json({
      advice: completion.choices[0].message.content,
    });

  } catch (err) {
    console.error("OPENAI ERROR:", err);
    res.status(500).json({ message: "AI failed" });
  }
};
