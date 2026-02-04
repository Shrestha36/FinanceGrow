import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, #0b1220, #020617);
  display: flex;
  color: white;
`;

export const GridWrapper = styled.div`
  margin: 150px;
  gap: 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 120px 200px;
  }
`;
export const InputCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  width: 400px;

  ${({ glow }) =>
    glow &&
    `
    box-shadow:
      0 0 0 1px rgba(34,211,238,0.5),
      0 0 30px rgba(34,211,238,0.25);
  `}
`;
export const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    width: 400px;
  }

  ${({ glow }) =>
    glow &&
    `
    box-shadow:
      0 0 0 1px rgba(34,211,238,0.5),
      0 0 30px rgba(34,211,238,0.25);
  `}
`;

export const CardTitle = styled.h3`
  margin-bottom: 16px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  flex: 1;
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  position: relative;
  z-index: 5;
`;

export const MonthItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: #f87171;
  cursor: pointer;
  position: relative;
  z-index: 5;
`;
export const GoalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const GoalModal = styled.div`
  width: 360px;
  padding: 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  text-align: center;
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.35);
`;

export const GoalStats = styled.div`
  margin: 18px 0;
  line-height: 1.7;
`;
export const ProgressRingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

export const AddExpenseContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const ExpenseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    width: 400px;
  }
`;

export const ExpenseBarContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
`;
