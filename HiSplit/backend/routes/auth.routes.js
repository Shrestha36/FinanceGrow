import express from "express";
import { loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login route is working. Use POST to login.");
});

// POST /api/login
router.post("/", loginUser);

export default router;
