import express from "express";
import {
  saveExpenseAnalysis,
  getExpenseAnalysis,
} from "../controllers/expenseAnalysis.controller.js";

const router = express.Router();

// ✅ ROOT paths ONLY
router.post("/", saveExpenseAnalysis);
router.get("/", getExpenseAnalysis);

export default router;
