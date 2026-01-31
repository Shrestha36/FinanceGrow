import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import piechartImage from "../../assets/images/piechart.png";
import ExpenseTrendCard from "../components/ExpenseTrendCard";
import Slidebar from "../components/slideBar";
import {
  saveExpenseAnalysis as saveExpenseAPI,
  getExpenseAnalysis,
} from "../services/expenseAnalysis.api";
import {
  CATEGORIES,
  CURRENCYOPTIONS,
  PIECHARTCOLORS,
  UNNECESSARY_CATEGORIES,
} from "../constants";
import {
  AnalysisContainer,
  AnalysisWrapper,
  Section,
  Title,
  Row,
  Select,
  Input,
  AddButton,
  RemoveButton,
  CurrencyWrapper,
  PlaceholderWrapper,
  PlaceholderImage,
  AIButton,
  AIWrapper,
  ItemAmountWrapper,
  SubmitButton,
  ButtonWrapper,
  ExpenseContainer,
} from "../styles/analysis.style";

function ExpenseAnalysis() {
  // 🔹 State
  const [currency, setCurrency] = useState("INR");
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([{ category: "Food", amount: "" }]);
  const [aiInsights, setAIInsights] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiError, setAiError] = useState("");
  const [saving, setSaving] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // 🔴 Replace with auth later
  const userEmail = "test@gmail.com";
  const hasIncome = income > 0;

  // 🔹 Load saved expense analysis
  useEffect(() => {
    const load = async () => {
      try {
        const data = await getExpenseAnalysis(userEmail);

        if (!data) return;

        setCurrency(data.currency);
        setIncome(data.income);
        setExpenses(
          data.expenses.length > 0
            ? data.expenses.map((e) => ({
                category: e.category,
                amount: e.amount,
              }))
            : [{ category: "Food", amount: "" }],
        );

        setIsSubmitted(true);
      } catch (err) {
        console.error("Load failed", err);
      }
    };

    load();
  }, [userEmail]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Format currency
  const formatCurrency = (value) => {
    const currencyData = CURRENCYOPTIONS[currency];
    if (!currencyData) return value;

    return `${currencyData.symbol}${Number(value).toLocaleString(
      currencyData.locale,
    )}`;
  };

  // 🔹 Handlers
  const addRow = () => setExpenses([...expenses, { category: "", amount: "" }]);

  const removeRow = (index) =>
    setExpenses(expenses.filter((_, i) => i !== index));

  const updateRow = (index, field, value) => {
    const updated = [...expenses];
    updated[index][field] = value;
    setExpenses(updated);
  };

  // 🔹 Calculations
  const categoryTotals = expenses.reduce((acc, item) => {
    const value = Number(item.amount || 0);
    if (!value) return acc;
    acc[item.category] = (acc[item.category] || 0) + value;
    return acc;
  }, {});

  const totalExpense = Object.values(categoryTotals).reduce(
    (sum, val) => sum + val,
    0,
  );

  const savings = hasIncome ? income - totalExpense : 0;
  const safeSavings = Math.max(savings, 0);

  const pieData =
    income > 0
      ? [
          ...Object.entries(categoryTotals).map(([name, value]) => ({
            name,
            value,
          })),
          { name: "Savings", value: safeSavings },
        ]
      : Object.entries(categoryTotals).map(([name, value]) => ({
          name,
          value,
        }));

  const filteredPieData = pieData.filter((item) => item.value > 0);

  const unnecessaryExpense = Object.entries(categoryTotals)
    .filter(([category]) => UNNECESSARY_CATEGORIES.includes(category))
    .reduce((sum, [, value]) => sum + value, 0);

  const unnecessaryPercent =
    income > 0 ? Math.round((unnecessaryExpense / income) * 100) : 0;
  const riskBarWidth = Math.min(unnecessaryPercent, 100);

  const riskColor =
    unnecessaryPercent > 70
      ? "#ef4444"
      : unnecessaryPercent > 40
        ? "#facc15"
        : "#22c55e";

  // 🔹 Save
  const saveAnalysis = async () => {
    if (!hasIncome) {
      alert("Please enter your income before submitting.");
      return;
    }

    const validExpenses = expenses.filter(
      (e) => e.category && Number(e.amount) > 0,
    );

    if (validExpenses.length === 0) {
      alert("Please enter at least one valid expense.");
      return;
    }

    setSaving(true);
    try {
      await saveExpenseAPI({
        userEmail,
        currency,
        income,
        expenses: validExpenses,
        totalExpense,
        savings: safeSavings,
        unnecessaryPercent,
      });

      setIsSubmitted(true);
      localStorage.setItem("expenseAnalysisUpdated", Date.now());
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // 🔹 AI Insights
  const getAIInsights = async () => {
    try {
      setLoadingAI(true);
      setAiError("");

      const res = await fetch("http://localhost:5001/api/ai-insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ income, expenses, currency }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      setAIInsights(data.insights);
    } catch (err) {
      setAiError(err.message || "Unable to fetch AI insights.");
    } finally {
      setLoadingAI(false);
    }
  };

  return (
    <AnalysisContainer>
      <Slidebar />
      <ExpenseContainer>
        <AnalysisWrapper>
          {/* 🟦 PART 1 — INPUTS */}
          <Section>
            <Title>Expense Categories</Title>
            <CurrencyWrapper>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </Select>
            </CurrencyWrapper>
            <ItemAmountWrapper>
              {expenses.map((row, index) => (
                <Row key={index}>
                  <Select
                    value={row.category}
                    onChange={(e) =>
                      updateRow(index, "category", e.target.value)
                    }
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Select>
                  <Input
                    type="number"
                    placeholder="Amount"
                    value={row.amount}
                    onChange={(e) => updateRow(index, "amount", e.target.value)}
                  />

                  {expenses.length > 1 && (
                    <RemoveButton onClick={() => removeRow(index)}>
                      ✕
                    </RemoveButton>
                  )}
                </Row>
              ))}
              <Input
                type="number"
                placeholder="Monthly Income"
                value={income || ""}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </ItemAmountWrapper>
            <ButtonWrapper>
              <AddButton onClick={addRow}>+ Add Category</AddButton>
              <SubmitButton
                onClick={saveAnalysis}
                disabled={saving || totalExpense === 0}
              >
                {saving ? "Submitting..." : "Submit"}
              </SubmitButton>
            </ButtonWrapper>
          </Section>

          <Section>
            <Title>Analysis</Title>
            {isSubmitted && filteredPieData.length > 0 ? (
              <>
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={filteredPieData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={isMobile ? 45 : 60}
                        outerRadius={isMobile ? 90 : 110}
                        paddingAngle={4}
                        label={({ percent }) =>
                          `${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {filteredPieData.map((_, index) => (
                          <Cell
                            key={index}
                            fill={PIECHARTCOLORS[index % PIECHARTCOLORS.length]}
                          />
                        ))}
                      </Pie>

                      <Tooltip
                        formatter={(value, name) => [
                          formatCurrency(value),
                          name,
                        ]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* 🔹 Legend */}
                <div style={{ marginTop: 12 }}>
                  {isSubmitted &&
                    filteredPieData.map((item, index) => (
                      <div
                        key={item.name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 14,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            color:
                              PIECHARTCOLORS[index % PIECHARTCOLORS.length],
                          }}
                        >
                          {item.name}
                        </span>
                        <span>{formatCurrency(item.value)}</span>
                      </div>
                    ))}
                </div>

                {isSubmitted && hasIncome && (
                  <p style={{ marginTop: 10, fontWeight: 600 }}>
                    💰 Savings: {formatCurrency(safeSavings)} (
                    {((safeSavings / income) * 100).toFixed(0)}%)
                  </p>
                )}
              </>
            ) : (
              <PlaceholderWrapper>
                <PlaceholderImage
                  src={piechartImage}
                  alt="Expense analysis preview"
                />
              </PlaceholderWrapper>
            )}
          </Section>
        </AnalysisWrapper>
        {/* 🟦 PART 3 — AI INSIGHTS */}
        <AIWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
            <AIButton
              onClick={getAIInsights}
              disabled={loadingAI || totalExpense === 0}
            >
              {loadingAI ? "Analyzing..." : "Ask AI to Optimize Expenses"}
            </AIButton>
          </div>

          {aiError && (
            <p style={{ marginTop: 10, color: "#f87171" }}>{aiError}</p>
          )}

          {aiInsights && (
            <div
              style={{
                marginTop: 14,
                padding: "14px 16px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.08)",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              {aiInsights}
            </div>
          )}
        </AIWrapper>
        <ExpenseTrendCard
          maxwidth
          withMargin
          unnecessaryPercent={unnecessaryPercent}
          riskColor={riskColor}
          riskBarWidth={riskBarWidth}
          categoryTotals={categoryTotals}
        />
      </ExpenseContainer>
    </AnalysisContainer>
  );
}

export default ExpenseAnalysis;
