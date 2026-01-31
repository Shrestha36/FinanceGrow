import ProgressRing from "./ProgressRing";
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalRow,
  CloseButton,
  ActionButton,
} from "../styles/goalModal.style";

function GoalModal({
  isOpen,
  onClose,
  goal,
  current,
  currencySymbol = "₹",
}) {
  if (!isOpen) return null;

  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>✕</CloseButton>

        <ModalTitle>🎯 Goal Tracker</ModalTitle>

        <ProgressRing percentage={percentage} />

        <ModalRow>
          <span>Target</span>
          <strong>
            {currencySymbol}
            {goal.toLocaleString()}
          </strong>
        </ModalRow>

        <ModalRow>
          <span>Current</span>
          <strong>
            {currencySymbol}
            {current.toLocaleString()}
          </strong>
        </ModalRow>

        <ModalRow>
          <span>Status</span>
          <strong>
            {percentage >= 100
              ? "🎉 Goal Achieved!"
              : percentage >= 75
              ? "🚀 Almost There"
              : "⏳ On Track"}
          </strong>
        </ModalRow>

        <ActionButton onClick={onClose}>Close</ActionButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default GoalModal;
