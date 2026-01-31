import styled from "styled-components";

export const SplitSummaryContainer = styled.div`
  margin-top: 24px;
  padding: 22px;
  border-radius: 22px;
  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.92),
    rgba(2, 6, 23, 0.97)
  );
  border: 1px solid rgba(34, 211, 238, 0.35);
  backdrop-filter: blur(18px);
`;

export const SplitHeader = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e5e7eb;
  margin-bottom: 16px;
   svg {
    font-size: 22px;
    color: #22d3ee;
    padding: 12px 6px 0px;
    filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.6));
  }
`;

export const SplitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SplitRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const SplitName = styled.span`
  color: #e5e7eb;
  font-weight: 600;
`;

export const SplitAmount = styled.span`
  color: #22d3ee;
  font-weight: 700;
`;

export const Section = styled.div`
  margin-top: 18px;
`;

export const SectionTitle = styled.p`
  color: #94a3b8;
  font-size: 13px;
  margin-bottom: 8px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e5e7eb;
  font-size: 14px;
`;

export const PreviewText = styled.p`
  margin-top: 12px;
  color: #22d3ee;
  font-weight: 600;
`;

export const SplitButton = styled.button`
  width: 100%;
  margin-top: 14px;
  padding: 12px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg, #22d3ee, #38bdf8);
  color: #020617;
  font-weight: 700;
  cursor: pointer;

  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const SelectWrapper = styled.div`
display: flex;
justify-content: space-around;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const DateText = styled.span`
  font-size: 13px;
  color: #94a3b8;
`;

export const ShareIconButton = styled.button`
  border: none;
  background: rgba(34, 211, 238, 0.15);
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(34, 211, 238, 0.3);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RemoveIconButton = styled.button`
  border: none;
  background: rgba(239, 68, 68, 0.15); /* red-500 */
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(239, 68, 68, 0.3);
  }
`;
