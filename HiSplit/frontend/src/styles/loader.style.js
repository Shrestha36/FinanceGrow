import styled, { keyframes } from "styled-components";

export const LoaderOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(4px);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderBox = styled.div`
  background: linear-gradient(145deg, #0f172a, #020617);
  padding: 32px 40px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: #e5e7eb;
  min-width: 260px;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.15);
  border-top-color: #38bdf8;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 16px;
`;

export const LoaderText = styled.p`
  font-size: 15px;
  margin-top: 4px;
  color: #cbd5f5;
`;
