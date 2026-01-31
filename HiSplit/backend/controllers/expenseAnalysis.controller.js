import ExpenseAnalysis from "../models/ExpenseAnalysis.js";

/* ✅ SAVE (UPSERT) */
export const saveExpenseAnalysis = async (req, res) => {
  try {
    const { userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json({ message: "userEmail required" });
    }

    const analysis = await ExpenseAnalysis.findOneAndUpdate(
      { userEmail },
      req.body,
      { upsert: true, new: true }
    );

    res.status(200).json(analysis);
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ message: "Failed to save analysis" });
  }
};

/* ✅ GET */
export const getExpenseAnalysis = async (req, res) => {
  try {
    const { userEmail } = req.query;

    if (!userEmail) {
      return res.status(400).json({ message: "userEmail is required" });
    }

    const analysis = await ExpenseAnalysis.findOne({ userEmail });

    // ✅ IMPORTANT: return JSON even if not found
    if (!analysis) {
      return res.status(200).json(null);
    }

    return res.status(200).json(analysis);
  } catch (err) {
    console.error("getExpenseAnalysis error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

