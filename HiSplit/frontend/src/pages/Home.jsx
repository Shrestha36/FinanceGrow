import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Slidebar from "../components/slideBar";
import ExpenseTrendCard from "../components/ExpenseTrendCard";
import homeImage from "../../assets/images/home.jpg";
import { UNNECESSARY_CATEGORIES } from "../constants";
import ScanBillCard from "../components/ScanBillCard";
import {
  DashboardGrid,
  GlassCard,
  CardTitle,
  BigValue,
  SubText,
  ChartPlaceholder,
  Gauge,
  InsightBox,
  HomepageContainer,
  SlideBarConatiner,
  HomePageWrapper,
  SpentWrapper,
  SubtextContainer,
  ScanCardContainer,
} from "../styles/home.style";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
const isMobile = window.innerWidth < 768;

function Home() {
  const navigate = useNavigate();
  const [monthlySummary, setMonthlySummary] = useState(null);
  const [expenseAnalysis, setExpenseAnalysis] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const userEmail = "test@financegrow.com";

  /* =======================
     LOAD MONTHLY SUMMARY
     ======================= */
  useEffect(() => {
    fetch(`http://localhost:5001/api/monthly-summary?userEmail=${userEmail}`)
      .then((res) => res.json())
      .then(setMonthlySummary)
      .catch(console.error);
  }, [userEmail]);

  /* =======================
     LOAD EXPENSE ANALYSIS
     (sync-safe)
     ======================= */
  const fetchExpense = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/expense-analysis?userEmail=${userEmail}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const text = await response.text();

      if (!text) {
        console.warn("Empty expense response from server");
        setExpenseAnalysis({ expenses: [] }); // 👈 SAFE DEFAULT
        return;
      }

      const data = JSON.parse(text);
      setExpenseAnalysis(data);
    } catch (error) {
      console.error("Expense fetch failed:", error);
      setExpenseAnalysis({ expenses: [] }); // 👈 PREVENT UI BREAK
    }
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  const uploadBill = async (file) => {
    const formData = new FormData();
    formData.append("bill", file);

    try {
      setIsUploading(true); // 🔵 START LOADER

      const response = await fetch("http://localhost:5001/api/bill-scan", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
      }

      const data = await response.json();

      sessionStorage.setItem("billScanResult", JSON.stringify(data));

      navigate("/home/order-breakdown");
    } catch (error) {
      console.error("Bill scan failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  /* =======================
     COMPUTATIONS
     ======================= */
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();

  const totalSpent = monthlySummary
    ? monthlySummary.monthlyExpense + monthlySummary.dailyExpense * daysInMonth
    : 0;

  const savings = monthlySummary?.salary
    ? Math.max(monthlySummary.salary - totalSpent, 0)
    : 0;

  const rawPercentSpent =
    monthlySummary?.salary > 0
      ? Math.round((totalSpent / monthlySummary.salary) * 100)
      : 0;

  const gaugePercent = Math.min(rawPercentSpent, 100);

  const expensesArray = expenseAnalysis?.expenses ?? [];

  const categoryTotals = expensesArray.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  const totalExpense = Object.values(categoryTotals).reduce(
    (sum, val) => sum + val,
    0,
  );

  const unnecessaryExpense = Object.entries(categoryTotals)
    .filter(([cat]) => UNNECESSARY_CATEGORIES.includes(cat))
    .reduce((sum, [, val]) => sum + val, 0);

  const unnecessaryPercent =
    totalExpense > 0
      ? Math.round((unnecessaryExpense / totalExpense) * 100)
      : 0;

  const riskBarWidth = Math.min(unnecessaryPercent, 100);

  const riskColor =
    unnecessaryPercent > 70
      ? "#ef4444"
      : unnecessaryPercent > 40
        ? "#facc15"
        : "#22c55e";

  /* =======================
     UI
     ======================= */
  return (
    <HomepageContainer bg={homeImage}>
      <HomePageWrapper>
        <SlideBarConatiner>
          <Slidebar />
        </SlideBarConatiner>

        <DashboardGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* TOTAL SAVINGS */}
          <GlassCard as={motion.div} variants={cardVariants}>
            <CardTitle>Total Savings</CardTitle>
            <BigValue>₹{savings}</BigValue>
            <SubText>Budget from earnings</SubText>
            <ChartPlaceholder />

            <SubText style={{ marginTop: 10 }}>
              Income: ₹{monthlySummary?.salary ?? 0}
            </SubText>

            <SubText
              style={{
                marginTop: 6,
                color: savings > 0 ? "#22c55e" : "#ef4444",
              }}
            >
              {savings > 0 ? "💰 Positive savings" : "⚠️ No savings left"}
            </SubText>
          </GlassCard>

          {/* MONTHLY SPENDING */}
          <GlassCard
            glow
            as={motion.div}
            variants={cardVariants}
            onClick={() => navigate("/home/expense")}
          >
            <CardTitle>Monthly Spending</CardTitle>

            <Gauge percent={gaugePercent}>
              <SpentWrapper>{gaugePercent}%</SpentWrapper>
            </Gauge>

            <SubtextContainer>
              <SubText>Avg ₹{totalSpent} / month</SubText>
              <SubText>Daily ₹{monthlySummary?.dailyExpense ?? 0}</SubText>
              <SubText>Monthly ₹{monthlySummary?.monthlyExpense ?? 0}</SubText>

              {rawPercentSpent > 100 && (
                <SubText style={{ color: "#ef4444", marginTop: 8 }}>
                  ⚠️ Overspent by {rawPercentSpent - 100}%
                </SubText>
              )}
            </SubtextContainer>
          </GlassCard>

          {/* AI INSIGHTS */}
          <GlassCard as={motion.div} variants={cardVariants}>
            <CardTitle>AI Insights</CardTitle>
            <ChartPlaceholder />
            <InsightBox>🧠 You can save ₹200 more this month</InsightBox>
          </GlassCard>
          <ScanCardContainer>
            <ScanBillCard onUpload={uploadBill} disabled={isUploading} />
          </ScanCardContainer>
          <ExpenseTrendCard
            maxwidth={isMobile}
            withMargin={isMobile}
            glow
            unnecessaryPercent={unnecessaryPercent}
            riskColor={riskColor}
            riskBarWidth={riskBarWidth}
            categoryTotals={categoryTotals}
            onClick={() => navigate("/home/expense/analysis")}
          />
        </DashboardGrid>
      </HomePageWrapper>
      {isUploading && <Loader text="Scanning bill, please wait…" />}
    </HomepageContainer>
  );
}

export default Home;
