import Goal from "../models/Goal.js";

// Save or update goal
export const saveGoal = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid goal amount" });
    }

    // Always keep ONLY ONE goal
    await Goal.deleteMany();

    const goal = await Goal.create({ amount });

    res.json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save goal" });
  }
};

// Get current goal
export const getGoal = async (req, res) => {
  try {
    const goal = await Goal.findOne();
    res.json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch goal" });
  }
};
