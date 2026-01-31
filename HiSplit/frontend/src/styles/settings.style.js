import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  background: #0b1220;
`;

export const Container = styled.div`
  flex: 1;
  padding: 80px 40px 40px 120px;

  @media (max-width: 768px) {
    padding: 80px 16px 16px 16px;
  }
`;

export const Header = styled.h1`
  color: white;
  margin-bottom: 24px;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const GlassCard = styled.div`
  background: rgba(15, 23, 42, 0.6);
  border-radius: 18px;
  padding: 22px;
  color: #e5e7eb;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);

  box-shadow: ${({ glow }) =>
    glow ? "0 0 30px rgba(99,102,241,.45)" : "none"};
`;

export const CardTitle = styled.h3`
  margin-bottom: 16px;
  color: #fff;
`;

export const ProfileGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileRow = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px;
`;

export const Label = styled.div`
  opacity: 0.7;
`;

export const Value = styled.div`
  font-weight: 500;
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 14px;

  img {
    height: 34px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(99, 102, 241, 0.5));
  }
`;

export const AddCardBtn = styled.button`
  background: rgba(255, 255, 255, 0.06);
  border: none;
  padding: 10px 16px;
  border-radius: 999px;
  color: #e5e7eb;
  cursor: pointer;
`;

export const RecentWrapper = styled(GlassCard)`
  margin-top: 28px;
`;

export const RecentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentItem = styled.div`
  background: rgba(255, 255, 255, 0.04);
  padding: 12px 14px;
  border-radius: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  small {
    opacity: 0.7;
  }
`;

export const Trash = styled.div`
  color: #ef4444;
  cursor: pointer;
  font-size: 18px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 550px;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
`;

export const ModalInput = styled.input`
  width: 100%;
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.08);
  color: white;
`;

export const ModalRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const ModalActions = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const CardPreviewWrapper = styled.div`
  width: 260px;
  height: 160px;
  border-radius: 16px;
  padding: 16px;
  background: linear-gradient(135deg, #1e293b, #312e81);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.35);
`;

export const CardPreviewNumber = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
`;

export const CardPreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: 0.85;
`;

export const CardPreviewName = styled.div`
  text-transform: uppercase;
`;

export const ModalBody = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
  width: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
