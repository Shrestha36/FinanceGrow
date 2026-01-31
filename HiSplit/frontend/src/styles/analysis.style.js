import styled from "styled-components";

export const AnalysisContainer = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  background: #0b1220;
  color: white;

  display: flex;
  gap: 64px;

  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    
  }
`;

export const AnalysisWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  padding: 28px;
  border-radius: 22px;

  width: 100%;

  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 20px;
    border-radius: 18px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr auto;
  gap: 14px;
  align-items: center;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Select = styled.select`
  height: 42px;
  padding: 0 14px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
`;

export const Input = styled.input`
  height: 42px;
  padding: 0 14px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
`;

export const AddButton = styled.button`
  height: 44px;
  width: 100%;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(34, 211, 238, 0.35);
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(90deg, #8a4fff 0%, #ff8c52 100%);
  height: 44px;
  width: 100%;
  border-radius: 14px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(34, 211, 238, 0.35);
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  color: #f87171;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const CurrencyWrapper = styled.div`
  padding: 10px 0px;
`;

export const PlaceholderWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;

  background: radial-gradient(
    circle at top,
    rgba(34, 211, 238, 0.12),
    rgba(15, 23, 42, 0.95)
  );

  border-radius: 24px;
  padding: 24px;
`;

export const PlaceholderImage = styled.img`
  width: 360px;
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 55%,
    rgba(0, 0, 0, 0) 85%
  );
  pointer-events: none;
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

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const BigValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const SubText = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;

export const GlassCard = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  color: #e5e7eb;

  box-shadow: 0 0 40px rgba(34, 211, 238, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  ${({ withMargin }) =>
    withMargin &&
    `
      margin-top: 120px;
      margin-bottom: 120px;
    `}

  /* ✅ Only if glow prop is true */
  ${({ glow }) =>
    glow &&
    `
      &:hover {
        transform: translateY(-6px) scale(1.01);
        box-shadow:
          0 0 18px rgba(34, 211, 238, 0.45),
          0 0 40px rgba(34, 211, 238, 0.25),
          0 10px 40px rgba(0, 0, 0, 0.6);
        border-color: rgba(34, 211, 238, 0.6);
      }

      &:active {
        transform: translateY(-3px) scale(1);
        box-shadow:
          0 0 14px rgba(34, 211, 238, 0.6),
          0 0 28px rgba(34, 211, 238, 0.35),
          0 8px 28px rgba(0, 0, 0, 0.6);
      }
    `}
`;



export const AIWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 0 12px;
  }
`;

export const ItemAmountWrapper = styled.div`
  @media (max-width: 1024px) {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  padding: 12px 0px 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 140px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ExpenseContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 80px 24px 120px;
  display: flex;
    flex-direction: column;
    justify-content: center;

  /* Desktop only */
  @media (min-width: 1024px) {
    max-width: 1100px;
    padding: 80px 24px 120px;
  }
`;
