import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 24px;
`;

export const LeftCircle = styled.div`
  width: 140px;
  height: 140px;
  min-width: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f7cff, #35d0ff);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  line-height: 1.15;
  box-shadow: 0 0 30px rgba(53, 208, 255, 0.6);
`;

export const RightCard = styled.div`
  flex: 1;
  padding: 18px 22px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.25);
  box-shadow: inset 0 0 0 1px rgba(56, 189, 248, 0.1),
    0 10px 40px rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #e0f2fe;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  ::after {
    content: "💡";
  }
`;

export const BulletRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
`;

export const Bullet = styled.div`
  font-size: 14px;
  color: #c7d2fe;
  line-height: 1.5;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;
