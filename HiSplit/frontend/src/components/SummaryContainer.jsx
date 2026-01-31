import {  ItemRow } from "../styles/ManualOrder.style";

function OrderSummaryCard({ orders, onRemove, onSelect, selectedId }) {
  return (
    <>
      {orders.length === 0 && (
        <p style={{ opacity: 0.6 }}>No orders yet</p>
      )}

      {orders.map((o) => (
        <ItemRow
          key={o.id}
          onClick={() => onSelect(o)}
          style={{
            cursor: "pointer",
            background:
              selectedId === o.id
                ? "rgba(34, 211, 238, 0.15)"
                : "transparent",
            borderRadius: 8,
            padding: "8px 10px",
          }}
        >
          <span>{o.customer}</span>
          <span>₹{o.total}</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(o.id);
            }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#ef4444",
              fontSize: 16,
            }}
          >
            ❌
          </button>
        </ItemRow>
      ))}
    </>
  );
}


export default OrderSummaryCard;
