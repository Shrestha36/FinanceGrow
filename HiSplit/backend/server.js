import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import expenseRoutes from "./routes/expense.routes.js";
import goalRoutes from "./routes/goal.routes.js";
import authRoutes from "./routes/auth.routes.js";
import monthlySummary from "./routes/monthlySummary.routes.js";
import ExpenseAnalysis from "./routes/expenseAnalysis.routes.js";
import billScanRoutes from "./routes/billScan.routes.js";
import ordersRoute from "./routes/orders.route.js";
import profileRoutes from "./routes/profile.routes.js";
import aiRoutes from "./routes/ai.routes.js";

connectDB();

const app = express();

// ✅ THESE TWO MUST BE BEFORE ROUTES
app.use(cors());
app.use(express.json());   // 👈 REQUIRED

app.use("/api/expenses", expenseRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/login", authRoutes); 
app.use("/api/monthly-summary", monthlySummary);
app.use("/api/expense-analysis", ExpenseAnalysis);
app.use("/api/bill-scan", billScanRoutes);
app.use("/api/orders", ordersRoute);
app.use("/api/profile", profileRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});

