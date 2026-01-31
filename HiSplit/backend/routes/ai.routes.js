import express from "express";
import { getExpenseAdvice } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/expense-advice", getExpenseAdvice);

export default router;
