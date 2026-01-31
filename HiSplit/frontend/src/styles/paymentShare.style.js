import styled from "styled-components";

export const PaymentHeader = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #e5e7eb;
`;

export const QRSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const QRText = styled.p`
  font-size: 13px;
  opacity: 0.7;
`;

export const UPIButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const UPIButton = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 12px;
  background: #22d3ee;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export const ShareSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const ShareButton = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e5e7eb;
  cursor: pointer;

  &:hover {
    background: rgba(34, 211, 238, 0.15);
  }
`;
export const DisabledNote = styled.p`
  text-align: center;
  font-size: 12px;
  opacity: 0.6;
  margin: 8px 0;
`;

export const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #22d3ee;
  margin-bottom: 12px;
`;

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);

  border-radius: 22px;
  padding: 26px;
  color: #e5e7eb;

  border: 1px solid rgba(34, 211, 238, 0.35);

  box-shadow:
    0 0 30px rgba(34, 211, 238, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.03);
    
`;


export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

export const UpperConatiner = styled.div`
  display: flex;
  flex-direction: column;
`;
