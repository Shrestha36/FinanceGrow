import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(6px);
`;

export const Card = styled.div`
  width: 420px;
  max-width: 92%;
  padding: 26px;
  border-radius: 22px;
  background: radial-gradient(
      120% 120% at 10% 0%,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0)
    ),
    #0b1220;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  color: #fff;
`;

export const HeaderPill = styled.div`
  padding: 14px 20px;
  border-radius: 999px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  background: linear-gradient(90deg, #6a5cff, #2dd4ff);
  margin-bottom: 20px;
`;

export const Section = styled.div`
  margin-bottom: 18px;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ErrorText = styled.div`
  color: #ff8f8f;
  margin-bottom: 12px;
  font-size: 15px;
`;

export const FeatureList = styled.ul`
  padding-left: 18px;
  margin: 0;

  li {
    color: #cbd5f5;
    margin-bottom: 6px;
    font-size: 14px;
  }
`;

export const UpgradeButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 999px;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(90deg, #6a5cff, #2dd4ff);
  margin-top: 12px;

  &:hover {
    opacity: 0.9;
  }
`;

export const FooterNote = styled.div`
  margin-top: 14px;
  text-align: center;
  font-size: 14px;
  color: #7cf29a;
`;
