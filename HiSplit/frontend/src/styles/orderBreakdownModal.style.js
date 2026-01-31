import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  background: rgba(15,23,42,0.9);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 24px;
  color: white;
  border: 1px solid #4fc3f7;
  box-shadow: 0 0 15px rgba(79, 195, 247, 0.4);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Close = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const Section = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.h4`
  margin-bottom: 6px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.85;
  margin-bottom: 4px;
`;

export const Footer = styled.div`
  margin-top: 16px;
  font-size: 16px;
  text-align: right;
`;
