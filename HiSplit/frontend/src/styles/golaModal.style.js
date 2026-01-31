import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 360px;
  padding: 24px;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 24px;
  color: white;
  text-align: center;
  position: relative;
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.35);
`;

export const ModalTitle = styled.h3`
  margin-bottom: 16px;
`;

export const ModalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const ActionButton = styled.button`
  margin-top: 18px;
  padding: 10px;
  width: 100%;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  border: none;
  color: white;
  cursor: pointer;
`;
