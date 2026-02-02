import styled from "styled-components";
import { motion } from "framer-motion";

export const ExpenseContainer = styled.div`
  background: #0b1220;
  background-size: cover;
  background-position: center;
  display: flex;
  overflow: hidden;
  color: white;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 120px;

  @media (min-width: 1024px) {
    justify-content: space-between;
     align-items: flex-start;
     flex-direction: row;
     gap: 80px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 320px;
  margin: 20px 0;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #20a85b;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 12px;
`;

export const SelectCurrency = styled.div``;

export const CalculationContainer = styled.div`
  width: 320px;
  padding: 20px 0px;
`;

export const PieContainer = styled.div`
  min-width: 300px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 16px;
`;

export const AmountContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const FeedbackPopup = styled(motion.div)`
  margin-top: 8px;
  padding: 12px 18px;
  border-radius: 18px;
  max-width: 300px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const PieWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

export const AIButton = styled.button`
  padding: 14px 28px;
  border-radius: 999px;
  border: none;

  background: linear-gradient(135deg, #6366f1, #22d3ee);
  color: white;

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;

  cursor: pointer;
  position: relative;
  overflow: hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease;

  /* 🌟 Default glow */
  box-shadow: 0 8px 24px rgba(34, 211, 238, 0.35);

  /* ✨ Hover magic */
  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.03);
    box-shadow:
      0 0 18px rgba(99, 102, 241, 0.8),
      0 0 36px rgba(34, 211, 238, 0.6);
    filter: brightness(1.1);
  }

  /* ✨ Magical shimmer */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 100%
    );
    transform: translateX(-120%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(120%);
  }

  /* ⏳ Disabled / Loading */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const InsightContainer = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 120px;

  @media (min-width: 1024px) {
    max-width: 300px;
     width: 100%;
  }
  ${({ disabled }) =>
    disabled &&
    `
      margin-top: 0;
    `}
  
`;

export const BarChartContainer = styled.div`
  position: relative;
  width: 180px;
  height: 220px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
`;

export const Bar = styled.div`
  position: relative;
  width: 36px;
  height: ${({ height }) => height};

  background: linear-gradient(180deg, #7dd3fc, #8b5cf6);

  border-radius: 6px;

  box-shadow:
    0 0 16px rgba(139, 92, 246, 0.7),
    inset -4px 0 6px rgba(0, 0, 0, 0.3);

  animation: grow 0.9s ease-out forwards;

  @keyframes grow {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 👉 RIGHT SIDE FACE (depth) */
  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    right: -6px;
    width: 11px;
    height: calc(100% - 6px);
    background: linear-gradient(180deg, #60a5fa, #7c3aed);
    transform: skewY(-32deg);
  }

  /* 👉 TOP FACE (light) */
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 6px;
    width: calc(100% - 6px);
    height: 8px;
    background: linear-gradient(90deg, #bae6fd, #a78bfa);
    transform: skewX(-57deg);
  }
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleText = styled.p`
  font-size: 14px;
  opacity: 0.85;
  text-align: center;
`;
export const MiddleContainer = styled.div`
  width: 100%;
  height: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  gap: 20px;
`;

export const GrowthArrow = styled.div`
  position: relative;
  bottom: 74px;
  left: 34px;

  font-size: 34px;
  font-weight: 900;

  color: #38bdf8;

  transform: rotate(-10deg);

  text-shadow:
    0 0 8px rgba(56, 189, 248, 0.8),
    0 0 18px rgba(139, 92, 246, 0.6);

  animation: floatUp 2s ease-in-out infinite;

  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(-4deg);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-10px) rotate(-4deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0) rotate(-4deg);
      opacity: 0.8;
    }
  }
`;

export const Plate3D = styled.div`
  position: absolute;
  bottom: -4px;
  left: 18px;

  width: 172px;
  height: 15px;

  background: linear-gradient(135deg, #1e3a8a, #0ea5e9);
  border-radius: 6px;

  transform: skewX(-66deg);

  box-shadow:
    0 10px 30px rgba(14, 165, 233, 0.35),
    inset 0 -4px 6px rgba(0, 0, 0, 0.4);

  overflow: hidden;

  /* 🔥 FAKE GRADUAL BLUR (VISUALLY IDENTICAL) */
  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      rgba(255, 255, 255, 0.18) 100%
    );
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const AISuggestionsBox = styled.div`
  margin-top: 20px;
  padding: 20px 22px;

  border-radius: 18px;

  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(14px);

  border: 1px solid rgba(167, 139, 250, 0.45);
  box-shadow:
    0 0 30px rgba(139, 92, 246, 0.25),
    inset 0 0 30px rgba(139, 92, 246, 0.08);
`;

export const AISuggestionItem = styled.div`
  font-size: 14px;
  line-height: 1.7;
  color: #e5e7eb;
  margin-bottom: 10px;
  display: flex;
  gap: 8px;

  &::before {
    content: "•";
    color: #a78bfa;
    font-weight: 700;
  }
`;

export const AIErrorText = styled.div`
  margin-top: 14px;
  color: #f87171;
  font-size: 14px;
`;