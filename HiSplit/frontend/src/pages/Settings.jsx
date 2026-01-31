import { useEffect, useState } from "react";
import Slidebar from "../components/slideBar";
import visaImg from "../../assets/images/payments/visa.png";
import mastercardImg from "../../assets/images/payments/mastercard.png";
import paypalImg from "../../assets/images/payments/payPal.png";
import {
  Page,
  Container,
  Header,
  TopRow,
  GlassCard,
  CardTitle,
  ProfileGrid,
  ProfileRow,
  PaymentRow,
  PaymentIcons,
  AddCardBtn,
  RecentWrapper,
  RecentGrid,
  PaymentItem,
  Trash,
  Label,
  Value,
  ModalOverlay,
  ModalCard,
  ModalInput,
  ModalRow,
  ModalActions,
  CardPreviewWrapper,
  CardPreviewNumber,
  CardPreviewFooter,
  CardPreviewName,
  ModalBody,
} from "../styles/settings.style";
import { FiTrash2 } from "react-icons/fi";

function Settings() {
  const [profile, setProfile] = useState(null);

  const [ordersList, setOrdersList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  // modal
  const [cards, setCards] = useState([]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSaveCard = () => {
    if (!cardNumber || !cardName || !expiry || !cvv) return;

    const newCard = {
      id: Date.now(),
      last4: cardNumber.slice(-4),
      cardName,
      expiry,
    };

    const updated = [...cards, newCard];

    setCards(updated);
    localStorage.setItem("cards", JSON.stringify(updated));

    setShowCardModal(false);
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
  };

  // ----------------------------
  // Delete payment (UI only)
  // ----------------------------
  const handleDelete = (index) => {
    setOrdersList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveCard = (id) => {
    const updated = cards.filter((c) => c.id !== id);
    setCards(updated);
    localStorage.setItem("cards", JSON.stringify(updated));
  };

  // ----------------------------
  // Load profile (local only)
  // ----------------------------
  useEffect(() => {
    const p = localStorage.getItem("profile");
    if (p) setProfile(JSON.parse(p));
  }, []);

  // ----------------------------
  // Load orders
  // ----------------------------
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/orders`)
      .then((r) => r.json())
      .then((data) => setOrdersList(data || []))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("cards");
    if (saved) {
      setCards(JSON.parse(saved));
    }
  }, []);

  return (
    <Page>
      <Slidebar />
      <Container>
        <Header>Settings</Header>

        {/* ---------------- top cards ---------------- */}
        <TopRow>
          {/* profile */}
          <GlassCard glow>
            <CardTitle>Profile</CardTitle>

            {profile && (
              <ProfileGrid>
                <ProfileRow>
                  <Label>Username</Label>
                  <Value>{profile.username}</Value>
                </ProfileRow>

                <ProfileRow>
                  <Label>Address</Label>
                  <Value>{profile.address}</Value>
                </ProfileRow>

                <ProfileRow>
                  <Label>Email</Label>
                  <Value>{profile.email}</Value>
                </ProfileRow>
              </ProfileGrid>
            )}
          </GlassCard>

          <GlassCard glow>
            <CardTitle>Payment Methods</CardTitle>

            <PaymentRow>
              <PaymentIcons>
                {cards.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      position: "relative",
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.08)",
                      fontSize: 14,
                      cursor: "pointer",
                      minWidth: 110,
                    }}
                  >
                    **** {c.last4}
                    <div style={{ fontSize: 12, opacity: 0.7 }}>
                      {c.cardName}
                    </div>
                    {/* remove button */}
                    <span
                      onClick={(e) => {
                        e.stopPropagation(); // ⛔ do not trigger card click
                        handleRemoveCard(c.id);
                      }}
                      style={{
                        position: "absolute",
                        top: 6,
                        right: 8,
                        fontSize: 12,
                        color: "#f87171",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </span>
                  </div>
                ))}

                {cards.length === 0 && (
                  <>
                    <img src={visaImg} alt="Visa" />
                    <img src={mastercardImg} alt="MasterCard" />
                    <img src={paypalImg} alt="PayPal" />
                  </>
                )}
              </PaymentIcons>

              <AddCardBtn onClick={() => setShowCardModal(true)}>
                Add New Card
              </AddCardBtn>
            </PaymentRow>
          </GlassCard>
        </TopRow>

        {/* ---------------- recent payments ---------------- */}
        <RecentWrapper glow>
          <CardTitle>Recent payments</CardTitle>

          <RecentGrid>
            {ordersList.slice(0, visibleCount).map((o, i) => (
              <PaymentItem key={i}>
                <div>
                  <div>Customer: {o.customer}</div>
                  <small>Total: ₹{o.total}</small>
                </div>

                <Trash onClick={() => handleDelete(i)}>
                  <FiTrash2 />
                </Trash>
              </PaymentItem>
            ))}
          </RecentGrid>

          <div
            style={{
              textAlign: "center",
              marginTop: 16,
              display: "flex",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {visibleCount < ordersList.length && (
              <AddCardBtn onClick={() => setVisibleCount((p) => p + 10)}>
                Show more
              </AddCardBtn>
            )}

            {visibleCount > 10 && (
              <AddCardBtn
                onClick={() => setVisibleCount(10)}
                style={{ opacity: 0.8 }}
              >
                Show less
              </AddCardBtn>
            )}
          </div>
        </RecentWrapper>
      </Container>

      {/* ---------------- add card modal ---------------- */}
      {showCardModal && (
        <ModalOverlay>
          <ModalCard>
            <CardTitle>Add new card</CardTitle>

            <ModalBody>
              {/* LEFT – live card preview */}
              <CardPreviewWrapper>
                <div style={{ fontSize: 12, opacity: 0.8 }}>CARD</div>

                <CardPreviewNumber>
                  {cardNumber
                    ? cardNumber.replace(/(.{4})/g, "$1 ")
                    : "•••• •••• •••• ••••"}
                </CardPreviewNumber>

                <CardPreviewFooter>
                  <CardPreviewName>
                    {cardName || "Cardholder Name"}
                  </CardPreviewName>
                  <div>{expiry || "MM/YY"}</div>
                </CardPreviewFooter>
              </CardPreviewWrapper>

              {/* RIGHT – inputs */}
              <div style={{ flex: 1 }}>
                <ModalInput
                  placeholder="Card number"
                  value={cardNumber}
                  maxLength={16}
                  onChange={(e) =>
                    setCardNumber(e.target.value.replace(/\D/g, ""))
                  }
                />

                <ModalInput
                  placeholder="Card holder name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />

                <ModalRow>
                  <ModalInput
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                  <ModalInput
                    placeholder="CVV"
                    type="password"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                  />
                </ModalRow>

                <ModalActions>
                  <AddCardBtn onClick={handleSaveCard}>Save</AddCardBtn>

                  <AddCardBtn
                    onClick={() => setShowCardModal(false)}
                    style={{ opacity: 0.7 }}
                  >
                    Cancel
                  </AddCardBtn>
                </ModalActions>
              </div>
            </ModalBody>
          </ModalCard>
        </ModalOverlay>
      )}
    </Page>
  );
}

export default Settings;
