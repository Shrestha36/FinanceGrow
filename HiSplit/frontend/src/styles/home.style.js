import styled from "styled-components";

export const HomeImage = styled.img`
  width: 300px;
  margin-bottom: 24px;
  height: auto;
`;

export const HomepageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background:
    linear-gradient(rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.6)),
    url(${(p) => p.bg}) center / cover no-repeat;

`;

export const DashboardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 50px 12px;
    @media (min-width: 1024px) {
     margin: 84px;
  }
`;

export const GlassCard = styled.div`
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(14px);
  border-radius: 24px;

  padding: 32px;
  min-height: 500px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #e5e7eb;
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;

  @media (min-width: 1024px) {
    min-height: 300px;
  }

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

export const ChartPlaceholder = styled.div`
  margin-top: 16px;
  height: 120px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(34, 211, 238, 0.35),
    rgba(34, 211, 238, 0.05)
  );
`;

export const Gauge = styled.div`
  margin: 20px auto;
  width: 160px;
  height: 80px;
  border-radius: 160px 160px 0 0;
  position: relative;

  background: ${({ percent, status }) =>
    status === "danger"
      ? `linear-gradient(
          90deg,
          #ef4444 ${percent}%,
          rgba(255, 255, 255, 0.1) ${percent}%
        )`
      : `linear-gradient(
          90deg,
          #22d3ee ${percent}%,
          rgba(255, 255, 255, 0.1) ${percent}%
        )`};

  box-shadow: ${({ status }) =>
    status === "danger"
      ? "0 0 25px rgba(239, 68, 68, 0.6)"
      : "0 0 20px rgba(34, 211, 238, 0.4)"};

  transition:
    background 0.4s ease,
    box-shadow 0.4s ease;

  span {
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
  }
`;

export const InsightBox = styled.div`
  margin-top: 16px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.6);
  text-align: center;
`;

export const SlideBarConatiner = styled.div``;

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 16px;

  @media (min-width: 1024px) {
    padding: 0;
    align-items: flex-start;
    min-height: 100vh;
  }
`;

export const SpentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 54px;
`;

export const SubtextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 35px;
  gap: 10px;
`;

export const ScanCardContainer = styled.div`
  @media (min-width: 768px) {
    width: 360px;
    max-height: 560px;
    display: flex;
  }
`;
