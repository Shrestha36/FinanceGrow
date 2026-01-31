import express from "express";
import {
  getExpenses,
  addExpense,
  deleteExpense,
  getExpenseAnalytics,
} from "../controllers/expense.controller.js";

const router = express.Router();

router.get("/", getExpenses);
router.post("/", addExpense);
router.delete("/:id", deleteExpense);
router.get("/analytics", getExpenseAnalytics);


export default router;
