import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
      enum: ["month", "year"],
      required: true,
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
