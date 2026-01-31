import { QRCodeCanvas } from "qrcode.react";
import {
  PaymentCardContainer,
  PaymentHeader,
  QRSection,
  QRText,
  UPIButtons,
  UPIButton,
  ShareSection,
  ShareButton,
  TotalAmount,
  BottomContainer,
  UpperConatiner,
} from "../styles/paymentShare.style";

function PaymentCard({ order }) {
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  const upiId = "yourupi@bank";
  const customer = order?.customer || "—";
  const amount = Number(order?.total) || 0;

  const upiLink = `upi://pay?pa=${upiId}&pn=${customer}&am=${amount}&cu=INR`;

  const shareText = `🧾 Order Payment
Customer: ${customer}
Amount: ₹${amount}
UPI ID: ${upiId}`;

  return (
    <PaymentCardContainer>
      <UpperConatiner>
        <PaymentHeader>💳 Pay & Share</PaymentHeader>

        {/* ✅ NAME + PRICE ONLY UPDATE AFTER SUBMIT */}
        <TotalAmount>
          ₹{amount}
          <span style={{ fontSize: 14, opacity: 0.7 }}>
            {" "}• {customer}
          </span>
        </TotalAmount>

        {/* ✅ QR ALWAYS VISIBLE */}
        <QRSection>
          <QRCodeCanvas
            value={upiLink}
            size={180}
            bgColor="#020617"
            fgColor="#22d3ee"
          />
          <QRText>
            Scan this QR using Google Pay / PhonePe / Paytm
          </QRText>
        </QRSection>
      </UpperConatiner>

      <BottomContainer>
        {/* ✅ PAYMENT BUTTONS ALWAYS VISIBLE */}
        {isMobile ? (
          <UPIButtons>
            <UPIButton onClick={() => (window.location.href = upiLink)}>
              Google Pay
            </UPIButton>
            <UPIButton onClick={() => (window.location.href = upiLink)}>
              PhonePe
            </UPIButton>
            <UPIButton onClick={() => (window.location.href = upiLink)}>
              Paytm
            </UPIButton>
          </UPIButtons>
        ) : (
          <UPIButtons>
            <UPIButton
              onClick={() =>
                window.open(
                  `https://paytm.com/online-payments?amount=${amount}`,
                  "_blank"
                )
              }
            >
              Pay via Paytm Web
            </UPIButton>
          </UPIButtons>
        )}

        {/* ✅ SHARE ALWAYS WORKS */}
        <ShareSection>
          <ShareButton
            onClick={() =>
              window.open(
                `https://wa.me/?text=${encodeURIComponent(shareText)}`,
                "_blank"
              )
            }
          >
            WhatsApp
          </ShareButton>

          <ShareButton
            onClick={() =>
              window.open(
                `mailto:?subject=Order Payment&body=${encodeURIComponent(
                  shareText
                )}`,
                "_blank"
              )
            }
          >
            Email
          </ShareButton>
        </ShareSection>
      </BottomContainer>
    </PaymentCardContainer>
  );
}

export default PaymentCard;
