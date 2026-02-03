import { useState, useMemo, useEffect } from "react";
import Slidebar from "../components/slideBar";
import ProgressRing from "../components/ProgressRing";
import { getGoal, saveGoal } from "../services/goal.api";
import {
  getExpenses,
  addExpense,
  deleteExpense,
  getExpenseAnalytics,
} from "../services/expense.api";
import { MONTHS, YEARS } from "../constants";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  PageContainer,
  GridWrapper,
  Card,
  InputCard,
  CardTitle,
  InputRow,
  Select,
  Input,
  AddButton,
  MonthItem,
  RemoveBtn,
  ProgressRingWrapper,
  GoalOverlay,
  GoalModal,
  GoalStats,
  AddExpenseContainer,
  ExpenseList,
  ExpenseBarContainer,
} from "../styles/monthlyAnalysis.style";

export default function MonthlyAnalysis() {
  /* ───────── STATE ───────── */
  const userEmail = "test@financegrow.com";  
  const [mode, setMode] = useState("month");
  const [label, setLabel] = useState("Jan");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [goal, setGoal] = useState(0);
  const [showGoalPopup, setShowGoalPopup] = useState(false);

  const totalExpense = analytics?.total || 0;

  /* ───────── FETCH ───────── */

  const fetchAnalytics = async () => {
    try {
      const data = await getExpenseAnalytics(mode, userEmail);
      setAnalytics(data);
    } catch (err) {
      console.error("Failed to load analytics", err);
    }
  };
  useEffect(() => {
    fetchAnalytics();
  }, [mode]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await getExpenses(userEmail);
        setExpenses(data);
      } catch (err) {
        console.error("Failed to fetch expenses", err);
      }
    };

    loadExpenses();
  }, []);

  useEffect(() => {
    const loadGoal = async () => {
      const savedGoal = await getGoal();
      if (savedGoal?.amount) {
        setGoal(savedGoal.amount);
      }
    };

    loadGoal();
  }, []);

  const percentageUsed = useMemo(() => {
    if (!goal) return 0;
    return (totalExpense / goal) * 100;
  }, [totalExpense, goal]);

  /* ───────── HANDLERS ───────── */

  const handleAddExpense = async () => {
    try {
      if (amount === "" || Number(amount) <= 0) return;

      const saved = await addExpense({
        label,
        amount: Number(amount),
        mode,
        userEmail,
      });

      // 3️⃣ Always append MongoDB document (_id included)
      await fetchAnalytics();
      setExpenses((prev) => [...prev, saved]);
      setAmount("");
    } catch (err) {
      console.error("Add failed:", err);
      alert("Failed to add expense");
    }
  };

  const removeExpense = async (id) => {
    try {
      await deleteExpense(id);
      await fetchAnalytics();
      // 4️⃣ Use _id for MongoDB
      setExpenses((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error("Failed to delete expense", err);
    }
  };

  /* ───────── UI ───────── */
  return (
    <PageContainer>
      <Slidebar />
      <GridWrapper>
        {/* LEFT */}
        <AddExpenseContainer>
          <InputCard glow>
            <CardTitle>
              {mode === "month"
                ? "Monthly Expense Input"
                : "Yearly Expense Input"}
            </CardTitle>

            <InputRow>
              <Select
                value={mode}
                onChange={(e) => {
                  const m = e.target.value;
                  setMode(m);
                  setLabel(m === "month" ? "Jan" : YEARS[0]);
                }}
              >
                <option value="month">Monthly</option>
                <option value="year">Yearly</option>
              </Select>
            </InputRow>

            <InputRow>
              <Select value={label} onChange={(e) => setLabel(e.target.value)}>
                {(mode === "month" ? MONTHS : YEARS).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </Select>

              <Input
                type="number"
                placeholder="Expense Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </InputRow>

            <AddButton type="button" onClick={handleAddExpense}>
              + Add {mode === "month" ? "Month" : "Year"}
            </AddButton>
          </InputCard>
          <ExpenseList>
            {/* 5️⃣ Render list using MongoDB _id */}
            {expenses.map((e) => (
              <MonthItem key={e._id}>
                <span>
                  {e.label}: ₹{Number(e.amount).toLocaleString()}
                </span>
                <RemoveBtn onClick={() => removeExpense(e._id)}>✕</RemoveBtn>
              </MonthItem>
            ))}
          </ExpenseList>
        </AddExpenseContainer>

        {/* RIGHT */}
        <ExpenseBarContainer>
          <Card glow>
            <CardTitle>Expense Comparison</CardTitle>

            {analytics?.chartData?.length ? (
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={analytics?.chartData || []}>
                  <defs>
                    <linearGradient
                      id="barGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a", // dark background
                      borderRadius: "8px",
                      border: "1px solid rgba(34, 211, 238, 0.5)",
                      color: "#e5e7eb",
                      boxShadow: "0 0 12px rgba(34, 211, 238, 0.6)",
                    }}
                    labelStyle={{
                      color: "#22d3ee",
                      fontWeight: "600",
                    }}
                    itemStyle={{
                      color: "#e5e7eb",
                    }}
                  />

                  <Bar
                    dataKey="amount"
                    fill="url(#barGradient)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p style={{ opacity: 0.6 }}>Add expenses to see the chart</p>
            )}
          </Card>

          <ProgressRingWrapper>
            <ProgressRing percentage={Math.min(percentageUsed, 100)} />
          </ProgressRingWrapper>

          <Card glow>
            <CardTitle>Set Goal</CardTitle>

            <Input
              type="number"
              placeholder="Goal Amount"
              value={goal || ""}
              onChange={(e) => setGoal(Number(e.target.value))}
            />

            <AddButton
              disabled={!goal}
              onClick={async () => {
                await saveGoal(goal);
                setShowGoalPopup(true);
              }}
            >
              Track Goal
            </AddButton>
          </Card>
        </ExpenseBarContainer>
      </GridWrapper>

      {showGoalPopup && (
        <GoalOverlay>
          <GoalModal>
            <h2>Expense Goal Status</h2>

            <ProgressRing percentage={Math.min(percentageUsed, 100)} />

            <GoalStats>
              <p>
                <strong>Target:</strong> ₹{goal}
              </p>
              <p>
                <strong>Total:</strong> ₹{totalExpense.toFixed(0)}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {percentageUsed <= 100 ? "✅ On Track" : "⚠️ Overspending"}
              </p>
            </GoalStats>

            <AddButton onClick={() => setShowGoalPopup(false)}>Close</AddButton>
          </GoalModal>
        </GoalOverlay>
      )}
    </PageContainer>
  );
}
