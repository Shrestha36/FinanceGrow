import {
  Overlay,
  Modal,
  Header,
  Close,
  Section,
  Title,
  Row,
  Footer,
} from "../styles/orderBreakdownModal.style";

function OrderBreakdownModal({
  items = [],
  billTotal = 0,
  billType = "RECEIPT",
  onClose,
}) {
  // ---------- Categorization ----------
  const categorize = (item) => {
    const name = (item.name || "").toLowerCase();

    // Packaging
    if (name.includes("packaging")) return "packaging";

    // Strong non-veg indicators (ANYWHERE in name)
    const nonVegKeywords = [
      "chicken",
      "mutton",
      "fish",
      "egg",
      "prawn",
      "lamb",
      "hyderabadi dum",
      "biryani"
    ];

    if (nonVegKeywords.some((k) => name.includes(k))) {
      return "non-veg";
    }

    // Drinks
    const drinkKeywords = [
      "thumbs",
      "thums",
      "coke",
      "pepsi",
      "soda",
      "water",
      "ml",
    ];

    if (drinkKeywords.some((k) => name.includes(k))) {
      return "drink";
    }

    return "veg";
  };

  // ---------- Correct price selection ----------
  const getAmount = (item) => {
    if (billType === "GST_INVOICE") {
      return Number(item.total) || 0;
    }
    return Number(item.net ?? item.total) || 0;
  };

  const sum = (arr) => arr.reduce((s, i) => s + getAmount(i), 0);

  // ---------- Buckets ----------
  const vegItems = items.filter((i) => categorize(i) === "veg");
  const nonVegItems = items.filter((i) => categorize(i) === "non-veg");
  const drinkItems = items.filter((i) => categorize(i) === "drink");
  const packagingItems = items.filter((i) => categorize(i) === "packaging");

  // ---------- Totals ----------
  const vegTotal = sum(vegItems);
  const nonVegTotal = sum(nonVegItems);
  const drinkTotal = sum(drinkItems);
  const packagingTotal = sum(packagingItems);

  const subtotal =
    billType === "GST_INVOICE"
      ? vegTotal + nonVegTotal + drinkTotal + packagingTotal
      : vegTotal + nonVegTotal + drinkTotal;

  const tax =
    billType === "GST_INVOICE" ? 0 : Math.max(billTotal - subtotal, 0);

  const grandTotal = billTotal || subtotal + tax;

  // ---------- UI ----------
  return (
    <Overlay>
      <Modal>
        <Header>
          <h3>🧾 Order Breakdown</h3>
          <Close onClick={onClose}>✕</Close>
        </Header>

        <Section>
          <Title>🟢 Veg Items (₹{vegTotal.toFixed(2)})</Title>
          {vegItems.map((i, idx) => (
            <Row key={idx}>
              {i.name}
              <span>₹{getAmount(i).toFixed(2)}</span>
            </Row>
          ))}
        </Section>

        <Section>
          <Title>🔴 Non-Veg Items (₹{nonVegTotal.toFixed(2)})</Title>
          {nonVegItems.map((i, idx) => (
            <Row key={idx}>
              {i.name}
              <span>₹{getAmount(i).toFixed(2)}</span>
            </Row>
          ))}
        </Section>

        <Section>
          <Title>🟡 Drinks (₹{drinkTotal.toFixed(2)})</Title>
          {drinkItems.map((i, idx) => (
            <Row key={idx}>
              {i.name}
              <span>₹{getAmount(i).toFixed(2)}</span>
            </Row>
          ))}
        </Section>

        {packagingItems.length > 0 && (
          <Section>
            <Title>📦 Packaging (₹{packagingTotal.toFixed(2)})</Title>
            {packagingItems.map((i, idx) => (
              <Row key={idx}>
                {i.name}
                <span>₹{getAmount(i).toFixed(2)}</span>
              </Row>
            ))}
          </Section>
        )}

        <Footer>
          <Row>
            Subtotal <span>₹{subtotal.toFixed(2)}</span>
          </Row>

          {tax > 0 && (
            <Row>
              Tax <span>₹{tax.toFixed(2)}</span>
            </Row>
          )}

          <strong>Grand Total: ₹{grandTotal.toFixed(2)}</strong>
        </Footer>
      </Modal>
    </Overlay>
  );
}

export default OrderBreakdownModal;
