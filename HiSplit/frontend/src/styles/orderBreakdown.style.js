import styled from "styled-components";

export const OrderSummaryContainer = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  background:
    linear-gradient(rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.6)),
    url(${(p) => p.$bg}) center / cover no-repeat;
  background-size: cover;
`;

export const ManualOrderContainer = styled.div`
  border-radius: 22px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const RightColumn = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding-right: 8px;

  @media (max-width: 768px) {
    height: auto;
    overflow: visible;
  }
`;

export const SummaryContainer = styled.div`
  padding: 26px;
  border-radius: 22px;

  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.92),
    rgba(2, 6, 23, 0.97)
  );

  border: 1px solid rgba(56, 189, 248, 0.3);
  backdrop-filter: blur(18px);
`;

export const OrderSummaryHeader = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    font-size: 22px;
    color: #22d3ee;
    filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.6));
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #fff;
`;

export const ChartWrapper = styled.div`
  margin-top: 12px;
  height: 300px;
`;

export const OrderSummaryWrapper = styled.div`
  min-height: calc(100vh - 88px);
  background: transparent;
  position: relative;
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    height: auto;
  }
`;

export const PaymentContainer = styled.div`
  width: 100%;
`;

export const ScanButton = styled.button`
  z-index: 30;

  padding: 14px 36px;
  border-radius: 999px;
  border: 6px solid #020617; /* dark outer ring */

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;

  color: #020617;
  cursor: pointer;

  background:
    /* glossy highlight */
    radial-gradient(
      120% 120% at 30% 20%,
      rgba(255, 255, 255, 0.45),
      rgba(255, 255, 255, 0) 45%
    ),
    /* main blue gradient */ linear-gradient(135deg, #1ebcd4, #0d8ac0, #7dd3fc);

  box-shadow:
    inset 0 -6px 12px rgba(255, 255, 255, 0.35),
    inset 0 8px 16px rgba(255, 255, 255, 0.2),
    0 16px 40px rgba(34, 211, 238, 0.45);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      inset 0 -6px 16px rgba(255, 255, 255, 0.45),
      0 22px 55px rgba(34, 211, 238, 0.65);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    filter: grayscale(0.4);
  }
`;

export const MiddleContainerWrapper = styled.div`
  display: flex;
  margin-top: 120px;
  gap: 50px;
  
  flex-direction: column;

   @media (min-width: 1024px) {
   flex-direction: row;
   width: 1140px;
   }
`;

export const SplitCardContainer = styled.div``;

export const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 24px;

  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.85),
    rgba(2, 6, 23, 0.55)
  );

  backdrop-filter: blur(10px);
`;
