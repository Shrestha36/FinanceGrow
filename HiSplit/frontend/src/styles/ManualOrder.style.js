import styled from "styled-components";

export const CardBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 148px;

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;

  border-radius: 22px 22px 0 0;

  /* Dark overlay for text readability */
  &::after {
    content: "";
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(2, 6, 23, 0.9)
    );
    border-radius: 22px 22px 0 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.88),
    rgba(2, 6, 23, 0.95)
  );
  border-radius: 22px;
  padding: 28px;
  color: #e5e7eb;
  backdrop-filter: blur(16px);

  border: 1px solid rgba(56, 189, 248, 0.25);
`;

export const Title = styled.h3`
  margin-top: 120px;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f8fafc;
`;

export const Input = styled.input`
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #f8fafc;
  font-size: 14px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
  }
`;

export const Row = styled.div`
  display: flex;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 12px;
  margin-top: 12px;
  align-items: center;
`;

export const Section = styled.div`
  margin-top: 22px;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 14px;
  color: #dbeafe;

  span:last-child {
    font-weight: 600;
    color: #f8fafc;
  }
`;

export const Total = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: 700;
  text-align: right;
  color: #7dd3fc;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #22d3ee;
    font-size: 22px;
    position: relative;
    padding-top: 100px;
  }
`;

export const SectionTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e5e7eb;

  svg {
    color: #22d3ee;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 14px;
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);

  svg {
    color: #22d3ee;
    font-size: 18px;
  }

  &:focus-within {
    border-color: rgba(34, 211, 238, 0.5);
    box-shadow: 0 0 10px rgba(34, 211, 238, 0.25);
  }
`;

export const IconButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;

  border: none;
  background: #38bdf8;
  color: #020617;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.6);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 14px;
  padding: 14px;

  border-radius: 16px;
  border: none;

  background: linear-gradient(135deg, #22d3ee, #38bdf8);
  color: #020617;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 700;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.6);
  }
`;
