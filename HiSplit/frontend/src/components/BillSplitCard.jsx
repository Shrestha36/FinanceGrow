import { useState, useMemo } from "react";
import { FaWhatsapp, FaTrash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {
  SplitSummaryContainer,
  SplitHeader,
  SplitList,
  SplitRow,
  SplitName,
  SplitAmount,
  Section,
  SectionTitle,
  CheckboxGroup,
  CheckboxLabel,
  PreviewText,
  SplitButton,
  SelectWrapper,
  HeaderRow,
  DateText,
  ShareIconButton,
  RemoveIconButton,
  IconContainer,
} from "../styles/billSplitCard.style.js";

/* ================= SPLIT CALC ================= */
const calculateSplit = (group) => {
  const totals = {};
  if (!group?.people?.length || !group?.items?.length) return totals;

  group.people.forEach((p) => (totals[p] = 0));
  group.items.forEach((item) => {
    if (!item.sharedBy?.length) return;
    const share = item.price / item.sharedBy.length;
    item.sharedBy.forEach((p) => (totals[p] += share));
  });

  return totals;
};

function BillSplitCard({
  group,
  submittedOrders,
  onAddSplitItem,
  onClearSplit,
}) {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  /* ================= FOOD ITEMS (UNIQUE) ================= */
  const foodItems = useMemo(() => {
    const map = new Map();

    submittedOrders.forEach((order) => {
      order.items.forEach((item) => {
        // 🚫 DO NOT SHOW SPLIT ITEMS
        if (item.isSplit) return;

        const key = `${item.name}-${item.price}`;
        if (!map.has(key)) {
          map.set(key, {
            id: key,
            name: item.name,
            price: item.price,
          });
        }
      });
    });

    return Array.from(map.values());
  }, [submittedOrders]);

  const selectedFoodItems = foodItems.filter((i) =>
    selectedItemIds.includes(i.id),
  );

  const totalAmount = selectedFoodItems.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  const totals = calculateSplit(group);

  /* ================= EMPTY STATE ================= */
  if (!submittedOrders.length) {
    return (
      <SplitSummaryContainer>
        <SplitHeader>
          {" "}
          <FiUsers /> Split Summary
        </SplitHeader>
        <p style={{ color: "#94a3b8" }}>
          Submit orders to enable bill splitting.
        </p>
      </SplitSummaryContainer>
    );
  }

  /* ================= SPLIT ACTION ================= */
  const handleSplit = () => {
    if (selectedCustomers.length < 2 || !selectedFoodItems.length) return;

    onAddSplitItem({
      name: selectedFoodItems.map((i) => i.name).join(", "),
      price: totalAmount,
      sharedBy: selectedCustomers,
      isSplit: true,
    });

    setSelectedCustomers([]);
    setSelectedItemIds([]);
  };

  /* ================= WHATSAPP SHARE ================= */
  const handleShare = () => {
    const text = Object.entries(totals)
      .map(([name, amt]) => `${name}: ₹${amt.toFixed(2)}`)
      .join("\n");

    const message = `Split Summary\n\n${text}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  const dateText = new Date().toLocaleString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleClear = () => {
    setSelectedCustomers([]);
    setSelectedItemIds([]);
    onClearSplit();
  };

  return (
    <SplitSummaryContainer>
      {/* ================= HEADER ================= */}
      <HeaderRow>
        <DateText>{dateText}</DateText>
        <IconContainer>
          <ShareIconButton onClick={handleShare}>
            <FaWhatsapp size={18} color="#22d3ee" />
          </ShareIconButton>
          <RemoveIconButton onClick={handleClear}>
            <FaTrash size={16} color="#ef4444" />
          </RemoveIconButton>
        </IconContainer>
      </HeaderRow>

      <SplitHeader>Split Summary</SplitHeader>

      {/* ================= TOTALS ================= */}
      <SplitList>
        {Object.entries(totals).map(([name, amount]) => (
          <SplitRow key={name}>
            <SplitName>{name}</SplitName>
            <SplitAmount>₹{amount.toFixed(2)}</SplitAmount>
          </SplitRow>
        ))}
      </SplitList>

      {/* ================= SELECTORS ================= */}
      <SelectWrapper>
        <Section>
          <SectionTitle>Select Customers</SectionTitle>
          <CheckboxGroup>
            {group.people.map((c) => (
              <CheckboxLabel key={c}>
                <input
                  type="checkbox"
                  checked={selectedCustomers.includes(c)}
                  onChange={() =>
                    setSelectedCustomers((prev) =>
                      prev.includes(c)
                        ? prev.filter((x) => x !== c)
                        : [...prev, c],
                    )
                  }
                />
                {c}
              </CheckboxLabel>
            ))}
          </CheckboxGroup>
        </Section>

        <Section>
          <SectionTitle>Select Food Items</SectionTitle>
          <CheckboxGroup>
            {foodItems.map((item) => (
              <CheckboxLabel key={item.id}>
                <input
                  type="checkbox"
                  checked={selectedItemIds.includes(item.id)}
                  onChange={() =>
                    setSelectedItemIds((prev) =>
                      prev.includes(item.id)
                        ? prev.filter((id) => id !== item.id)
                        : [...prev, item.id],
                    )
                  }
                />
                {item.name} — ₹{item.price}
              </CheckboxLabel>
            ))}
          </CheckboxGroup>
        </Section>
      </SelectWrapper>

      {/* ================= PREVIEW ================= */}
      {selectedCustomers.length > 1 && totalAmount > 0 && (
        <PreviewText>
          ₹{(totalAmount / selectedCustomers.length).toFixed(2)} per person
        </PreviewText>
      )}

      {/* ================= ACTION ================= */}
      <SplitButton
        onClick={handleSplit}
        disabled={selectedCustomers.length < 2 || !selectedFoodItems.length}
      >
        Split & Confirm
      </SplitButton>
    </SplitSummaryContainer>
  );
}

export default BillSplitCard;
