import { motion } from "framer-motion";
import {
  GlassCard,
  CardTitle,
  BigValue,
  SubText,
} from "../styles/analysis.style";
import { UNNECESSARY_CATEGORIES } from "../constants";

function ExpenseTrendCard({
  unnecessaryPercent,
  riskColor,
  riskBarWidth,
  categoryTotals,
  onClick,
  glow,
  withMargin,
  maxwidth,
}) {
  return (
    <GlassCard
      maxwidth={maxwidth}
      withMargin={withMargin}
      as={motion.div}
      glow={glow}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : undefined} // optional UX
    >
      <CardTitle>Non-Essential Expense Ratio</CardTitle>

      <BigValue style={{ color: riskColor }}>{unnecessaryPercent}.00</BigValue>

      {/* Risk Bar */}
      <div
        style={{
          marginTop: 16,
          height: 16,
          width: "100%",
          borderRadius: 12,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${riskBarWidth}%`,
            height: "100%",
            background: riskColor,
            transition: "width 0.6s ease",
          }}
        />
      </div>

      <SubText style={{ marginTop: 12 }}>
        {unnecessaryPercent > 70
          ? "⚠️ High focus on non-essential expenses"
          : unnecessaryPercent > 40
            ? "⚠️ Moderate unnecessary spending"
            : "✅ Spending habits look healthy"}
      </SubText>

      <SubText style={{ marginTop: 6, opacity: 0.8 }}>
        Top waste areas:{" "}
        {Object.keys(categoryTotals)
          .filter((cat) => UNNECESSARY_CATEGORIES.includes(cat))
          .slice(0, 3)
          .join(", ") || "None"}
      </SubText>
    </GlassCard>
  );
}

export default ExpenseTrendCard;
