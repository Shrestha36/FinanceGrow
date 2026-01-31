import MonthlySummary from "../models/monthlySummary.js";

export const saveMonthlySummary = async (req, res) => {
  try {
    console.log("📥 Incoming body:", req.body); // 👈 ADD THIS

    const { userEmail, salary, dailyExpense, monthlyExpense } = req.body;

    if (!userEmail || salary == null || dailyExpense == null || monthlyExpense == null) {
      console.log("❌ Missing fields");
      return res.status(400).json({ message: "Missing required fields" });
    }

    const month = new Date().toISOString().slice(0, 7);

    const summary = await MonthlySummary.findOneAndUpdate(
      { userEmail, month },
      { salary, dailyExpense, monthlyExpense },
      { upsert: true, new: true }
    );

    console.log("✅ Saved summary:", summary); // 👈 ADD THIS

    res.status(200).json(summary);
  } catch (error) {
    console.error("🔥 Save error:", error);
    res.status(500).json({ message: "Failed to save monthly summary" });
  }
};

// GET monthly summary
export const getMonthlySummary = async (req, res) => {
  try {
    const { userEmail, month } = req.query;

    if (!userEmail) {
      return res.status(400).json({ message: "userEmail is required" });
    }

    // Default to current month if not provided
    const targetMonth = month || new Date().toISOString().slice(0, 7);

    const summary = await MonthlySummary.findOne({
      userEmail,
      month: targetMonth,
    });

    if (!summary) {
      return res.status(404).json({ message: "Monthly summary not found" });
    }

    res.status(200).json(summary);
  } catch (error) {
    console.error("🔥 Fetch error:", error);
    res.status(500).json({ message: "Failed to fetch monthly summary" });
  }
};
