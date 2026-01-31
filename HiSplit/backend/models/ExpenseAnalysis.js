import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  category: String,
  amount: Number,
});

const ExpenseAnalysisSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    currency: String,
    income: Number,
    expenses: [ExpenseSchema],
    totalExpense: Number,
    savings: Number,
    unnecessaryPercent: Number,
  },
  { timestamps: true }
);

export default mongoose.model("ExpenseAnalysis", ExpenseAnalysisSchema);
