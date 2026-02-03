import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Loader from "../components/Loader";
import Slidebar from "../components/slideBar";
import AiProUpgrade from "../components/AiProUpgrade";
import AIInsightBar from "../components/AIInsightBar";
import { CURRENCYOPTIONS } from "../constants";
import {
  ExpenseContainer,
  Input,
  Title,
  InputWrapper,
  SelectCurrency,
  CalculationContainer,
  PieContainer,
  AmountContainer,
  FeedbackPopup,
  PieWrapper,
  ContentWrapper,
  AIButton,
  InsightContainer,
  BarChartContainer,
  Bar,
  MiddleContainer,
  GrowthArrow,
  Plate3D,
  BottomContainer,
  AIErrorText,
} from "../styles/expense.style";

function Expenses() {
  const [salary, setSalary] = useState(0);
  const [daily, setDaily] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [currency, setCurrency] = useState("₹");
  const [showFeedback, setShowFeedback] = useState();
  const canAnalyze = salary > 0 && (daily > 0 || monthly > 0);
  const [aiAdvice, setAiAdvice] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [showUpgrade, setShowUpgrade] = useState(false);

  const navigate = useNavigate();

  const monthlyDailyExpense = daily * 30;
  const totalSpent = Number(monthly) + monthlyDailyExpense;
  const savings = salary - totalSpent;
  const COLORS = ["#941f0a", "#06597d"];

  const data = [
    { name: "Spent", value: totalSpent },
    { name: "Saved", value: savings > 0 ? savings : 0 },
  ];

  let feedbackText = "";
  let feedbackType = "";

  if (savings > totalSpent) {
    feedbackText = "🎉 Good job! You're saving more than you spend.";
    feedbackType = "success";
  } else if (savings > salary * 0.3) {
    feedbackText = "👍 You're doing okay! Try to save a bit more next month.";
    feedbackType = "warning";
  } else {
    feedbackText =
      "⚠️ Expenses are high. Let's focus on saving more next time!";
    feedbackType = "danger";
  }

  const speakFeedback = (text) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  const saveMonthlySpent = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/monthly-summary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: "test@financegrow.com",
        salary,
        dailyExpense: daily,
        monthlyExpense: monthly,
      }),
    });
  };

  const getAIAdvice = async () => {
    try {
      setAiLoading(true);
      setAiError("");
      setAiAdvice("");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/expense-advice`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            salary,
            daily,
            monthly,
            totalSpent,
            savings,
            currency,
            userEmail: "test@financegrow.com",
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 402) {
          throw new Error("PAYMENT_REQUIRED");
        }
        throw new Error(data.message || "Failed to get AI advice");
      }

      setAiAdvice(data.advice);
    } catch (err) {
      if (err.message === "PAYMENT_REQUIRED") {
        setAiError("FREE_LIMIT_OVER");
        setShowUpgrade(true);
      } else {
        setAiError(err.message);
      }
    } finally {
      setAiLoading(false);
    }
  };

  useEffect(() => {
    setShowFeedback(false);
    window.speechSynthesis.cancel();
  }, [salary, daily, monthly]);

  useEffect(() => {
    if (!showFeedback || !feedbackText) return;

    const timer = setTimeout(() => {
      speakFeedback(feedbackText);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, [showFeedback]);

  const handleUnlockAi = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/ai/unlock`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: "test@financegrow.com",
        }),
      });

      setAiError("");
      setShowUpgrade(false);
      alert("AI unlocked. You can use AI suggestions now!");
    } catch (e) {
      alert("Unlock failed");
    }
  };

  return (
    <ExpenseContainer>
      <Slidebar />
      <ContentWrapper>
        <AmountContainer>
          <Title>Expense Analyzer</Title>
          <InputWrapper>
            <Input
              type="number"
              placeholder="Income"
              onChange={(e) => setSalary(Number(e.target.value))}
            />

            <Input
              type="number"
              placeholder="Daily expense"
              onChange={(e) => setDaily(Number(e.target.value))}
            />

            <Input
              type="number"
              placeholder="Monthly expense"
              onChange={(e) => setMonthly(Number(e.target.value))}
            />
          </InputWrapper>

          <CalculationContainer>
            <SelectCurrency>
              <select onChange={(e) => setCurrency(e.target.value)}>
                {CURRENCYOPTIONS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </SelectCurrency>
            <Title>
              Total Spent: {currency} {totalSpent}
            </Title>
            <Title>
              Savings: {currency} {Math.max(savings, 0)}
            </Title>
          </CalculationContainer>
        </AmountContainer>
        <BottomContainer>
          {canAnalyze ? (
            <PieContainer>
              <PieWrapper>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <defs>
                      <linearGradient
                        id="spentGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#ff7a45" />
                        <stop offset="100%" stopColor="#ff4d4f" />
                      </linearGradient>

                      <linearGradient
                        id="savedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#7c7cff" />
                      </linearGradient>
                    </defs>

                    <Pie
                      data={data}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={4}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth={2}
                      isAnimationActive
                      animationDuration={700}
                      onAnimationEnd={() => {
                        if (!showFeedback) {
                          setShowFeedback(true);
                          saveMonthlySpent();
                        }
                      }}
                    >
                      <Cell fill="url(#spentGradient)" />
                      <Cell fill="url(#savedGradient)" />
                    </Pie>

                    {/* center text */}
                    <text
                      x="50%"
                      y="45%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#fff"
                      fontSize="28"
                      fontWeight="700"
                    >
                      {salary > 0
                        ? `${Math.round((Math.max(savings, 0) / salary) * 100)}%`
                        : "0%"}
                    </text>

                    <text
                      x="50%"
                      y="56%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#9ca3af"
                      fontSize="14"
                    >
                      Savings
                    </text>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </PieWrapper>

              {showFeedback && feedbackText && (
                <FeedbackPopup
                  type={feedbackType}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {feedbackText}
                </FeedbackPopup>
              )}
            </PieContainer>
          ) : (
            <MiddleContainer>
              <BarChartContainer>
                <GrowthArrow>↗</GrowthArrow>
                <Bar height="80px" />
                <Bar height="130px" />
                <Bar height="180px" />
                <Plate3D />
              </BarChartContainer>

              <Title style={{ marginTop: "20px", textAlign: "center" }}>
                Ready to gain insights?
              </Title>
            </MiddleContainer>
          )}
          <AIButton onClick={() => navigate("/home/expense/analysis")}>
            Analyze & Optimize Expense
          </AIButton>
        </BottomContainer>

        <InsightContainer disabled={aiLoading || !!aiAdvice}>
          <AIButton onClick={getAIAdvice} disabled={!canAnalyze || aiLoading}>
            <span className="label">
              {aiLoading ? "Analyzing..." : "Boost My Savings with AI"}
            </span>
          </AIButton>

          {aiLoading && <Loader text="Boost My Savings with AI..." />}

          {aiAdvice && <AIInsightBar text={aiAdvice} />}

          {aiError && aiError !== "FREE_LIMIT_OVER" && (
            <AIErrorText>{aiError}</AIErrorText>
          )}
        </InsightContainer>
      </ContentWrapper>
      {showUpgrade && (
        <AiProUpgrade
          onClose={() => setShowUpgrade(false)}
          onPay={handleUnlockAi}
        />
      )}
    </ExpenseContainer>
  );
}

export default Expenses;
