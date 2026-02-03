import styled from "styled-components";

export const ScanCard = styled.div`
  padding: 18px 12px;
  border-radius: 24px;

  background:
    radial-gradient(
      120% 120% at 0% 0%,
      rgba(34, 211, 238, 0.12),
      transparent 40%
    ),
    rgba(10, 18, 32, 0.85);

  border: 2px solid rgba(99, 102, 241, 0.35);

  box-shadow:
    0 0 40px rgba(34, 211, 238, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);

  color: #e5e7eb;
  position: relative;
  cursor: pointer;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border 0.35s ease;

  /* ✨ HOVER GLOW ✨ */
  &:hover {
    transform: translateY(-6px) scale(1.02);

    border: 2px solid rgba(34, 211, 238, 0.7);

    box-shadow:
      0 0 25px rgba(34, 211, 238, 0.8),
      0 0 60px rgba(99, 102, 241, 0.5),
      inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
  @media (min-width: 768px) {
    padding: 18px 30px;
    // display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 28px;
`;

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 999px;
  margin-bottom: 28px;
  background: #1abe56;
  border: 2px solid rgba(147, 197, 253, 0.5);

  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.9);
    box-shadow:
      0 0 20px rgba(34, 211, 238, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export const PlusIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  border: 2px solid rgba(147, 197, 253, 0.7);
  display: grid;
  place-items: center;

  font-size: 24px;
  font-weight: 600;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Footer = styled.div`
  display: flex;
  gap: 28px;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  opacity: 0.8;
`;
