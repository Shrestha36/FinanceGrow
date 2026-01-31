import express from "express";
import {
  saveMonthlySummary,
  getMonthlySummary,
} from "../controllers/monthlySummary.js";

const router = express.Router();

// ✅ ROOT paths only
router.post("/", saveMonthlySummary);
router.get("/", getMonthlySummary);

export default router;
