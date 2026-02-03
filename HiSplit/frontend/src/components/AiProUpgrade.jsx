import { useState } from "react";
import PaymentCard from "./PaymentCard";

import {
  Overlay,
  Card,
  HeaderPill,
  Section,
  Title,
  ErrorText,
  FeatureList,
  UpgradeButton,
  FooterNote,
} from "../styles/aiPro.style";

export default function AiProUpgrade({ onClose, onPay }) {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <Overlay onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>

        {!showPayment ? (
          <>
            <HeaderPill>
              Supercharge Your Savings with AI Pro
            </HeaderPill>

            <Section>
              <Title>⭐ AI Boost</Title>

              <ErrorText>
                You have used your 2 free AI suggestions. Pay ₹9 to continue.
              </ErrorText>

              <FeatureList>
                <li>Personalized Strategies</li>
                <li>Smart Budgeting Tools</li>
              </FeatureList>
            </Section>

            {/* ✅ ONLY shows payment UI after this click */}
            <UpgradeButton onClick={() => setShowPayment(true)}>
              Upgrade to AI Pro – Pay ₹9
            </UpgradeButton>

            <FooterNote>
              Unlock unlimited access for ₹99/month – Best Value!
            </FooterNote>
          </>
        ) : (
          /* ✅ Step 2 – payment UI */
          <PaymentCard
            order={{ total: 9, customer: "AI Pro Upgrade" }}
            onSuccess={onPay}
          />
        )}

      </Card>
    </Overlay>
  );
}
