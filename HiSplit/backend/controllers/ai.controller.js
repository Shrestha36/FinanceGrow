import fetch from "node-fetch";
import AiUsage from "../models/ai.js";

export const getExpenseAdvice = async (req, res) => {
  try {
    const {
      salary,
      daily,
      monthly,
      totalSpent,
      savings,
      currency,
      userEmail,
    } = req.body;

    if (!userEmail) {
      return res.status(400).json({ message: "userEmail required" });
    }

    let aiUser = await AiUsage.findOne({ userEmail });

    // ✅ auto create
    if (!aiUser) {
      aiUser = await AiUsage.create({ userEmail });
    }

    // ✅ 2 free tries
    if (aiUser.aiAdviceCount >= 2 && !aiUser.aiPaid) {
      return res.status(402).json({
        message: "Payment required to unlock AI suggestions",
      });
    }

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

    const response = await fetch(
      `${process.env.OLLAMA_BASE_URL}/api/generate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3.2",
          prompt,
          stream: false,
        }),
      }
    );

    const data = await response.json();

    if (!data?.response) {
      return res.status(500).json({
        message: "Ollama returned empty response",
        raw: data,
      });
    }

    // ✅ increment only after success
    aiUser.aiAdviceCount += 1;
    await aiUser.save();

    res.json({
      advice: data.response,
      freeLeft: aiUser.aiPaid
        ? null
        : Math.max(0, 2 - aiUser.aiAdviceCount),
    });
  } catch (err) {
    console.error("OLLAMA ERROR:", err);
    res.status(500).json({ message: "AI failed" });
  }
};

export const unlockAi = async (req, res) => {
  try {
    const { userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json({ message: "userEmail required" });
    }

    let aiUser = await AiUsage.findOne({ userEmail });

    // optional: auto create if not exists
    if (!aiUser) {
      aiUser = await AiUsage.create({ userEmail });
    }

    aiUser.aiPaid = true;
    await aiUser.save();

    res.json({ success: true });
  } catch (err) {
    console.error("UNLOCK AI ERROR:", err);
    res.status(500).json({ message: "Unlock failed" });
  }
};

export const getAIInsights = async (req, res) => {
  try {
    const { income, expenses, currency, userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json({ message: "userEmail required" });
    }

    let aiUser = await AiUsage.findOne({ userEmail });

    if (!aiUser) {
      aiUser = await AiUsage.create({ userEmail });
    }

    // ✅ same limit logic
    if (aiUser.aiAdviceCount >= 2 && !aiUser.aiPaid) {
      return res.status(402).json({
        message: "Payment required to unlock AI insights",
      });
    }

    const prompt = `
You are a personal finance advisor.

Monthly income: ${currency} ${income}

Expenses:
${expenses.map(e => `- ${e.category}: ${currency}${e.amount}`).join("\n")}

Give 4 short actionable suggestions to optimize spending.
Each suggestion on a new line.
`;

    const response = await fetch(
      `${process.env.OLLAMA_BASE_URL}/api/generate`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3.2",
          prompt,
          stream: false,
        }),
      }
    );

    const data = await response.json();

    if (!data?.response) {
      return res.status(500).json({ message: "AI failed" });
    }

    // ✅ increase usage only after success
    aiUser.aiAdviceCount += 1;
    await aiUser.save();

    res.json({
      insights: data.response,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "AI failed" });
  }
};
