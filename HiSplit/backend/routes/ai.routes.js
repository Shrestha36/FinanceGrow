import express from "express";
import { getExpenseAdvice, unlockAi, getAIInsights } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/expense-advice", getExpenseAdvice);
router.post("/unlock", unlockAi);
router.post("/insights", getAIInsights);

export default router;
