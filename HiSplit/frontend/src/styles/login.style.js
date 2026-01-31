import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, #0f172a, #020617);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
`;

export const LoginCard = styled.div`
  width: 860px;
  height: 420px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 22px;
  overflow: hidden;

  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 80px rgba(34, 211, 238, 0.18);
`;

/* LEFT SECTION */
export const LeftSection = styled.div`
  padding: 48px;
  background: linear-gradient(
    160deg,
    rgba(2, 6, 23, 0.95),
    rgba(15, 23, 42, 0.9)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Brand = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #e5e7eb;

  span {
    color: #22c55e;
  }
`;

export const WelcomeText = styled.p`
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.75;
  color: #ffff;
`;

/* RIGHT SECTION */
export const RightSection = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #e5e7eb;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 28px;
  color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: rgba(2, 6, 23, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e5e7eb;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #22d3ee;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  border: none;
  color: #020617;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 6px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(34, 211, 238, 0.45);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  color: #f87171;
  font-size: 13px;
  margin-bottom: 10px;
`;
