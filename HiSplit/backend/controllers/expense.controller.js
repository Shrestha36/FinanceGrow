import Expense from "../models/Expense.js";

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};

export const addExpense = async (req, res) => {
  try {
    console.log("BODY:", req.body); // 👈 IMPORTANT DEBUG

    const { label, amount, mode } = req.body;

    if (!label || !amount || !mode) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const expense = await Expense.create({ label, amount, mode });
    res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add expense" });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete expense" });
  }
};

// 📊 Analytics API
export const getExpenseAnalytics = async (req, res) => {
  try {
    const { mode } = req.query; // month | year

    if (!mode) {
      return res.status(400).json({ error: "mode is required" });
    }

    // 1️⃣ Get expenses of the selected mode
    const expenses = await Expense.find({ mode });

    // 2️⃣ Calculate analytics
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const count = expenses.length;
    const average = count ? total / count : 0;

    // 3️⃣ Prepare chart data
    const chartData = expenses.map((e) => ({
      label: e.label,
      amount: e.amount,
    }));

    // 4️⃣ Send analytics response
    res.json({
      total,
      average,
      count,
      chartData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
};

