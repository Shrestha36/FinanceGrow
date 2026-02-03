import {
  BarWrapper,
  RightCard,
  Header,
  BulletRow,
  Bullet,
} from "../styles/aiInsightBar.style.js";

export default function AIInsightBar({ text }) {
  if (!text) return null;

  const lines = text
    .replace(/^Here.*?\n?/i, "")
    .split("\n")
    .map((l) => l.replace(/^\*\s?/, "").trim())
    .filter(Boolean);

  return (
    <BarWrapper>
      <RightCard>
        <Header>AI Insights</Header>

        <BulletRow>
          {lines.map((line, i) => (
            <Bullet key={i}>• {line}</Bullet>
          ))}
        </BulletRow>
      </RightCard>
    </BarWrapper>
  );
}
