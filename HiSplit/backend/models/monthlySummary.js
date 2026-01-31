// models/monthlySummary.js
import mongoose from "mongoose";

const monthlySummarySchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    month: { type: String, required: true }, // YYYY-MM

    salary: { type: Number, required: true },
    dailyExpense: { type: Number, required: true },
    monthlyExpense: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("MonthlySummary", monthlySummarySchema);
