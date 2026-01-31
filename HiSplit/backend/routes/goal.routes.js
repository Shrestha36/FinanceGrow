import express from "express";
import { saveGoal, getGoal } from "../controllers/goal.controller.js";

const router = express.Router();

router.get("/", getGoal);
router.post("/", saveGoal);

export default router;
