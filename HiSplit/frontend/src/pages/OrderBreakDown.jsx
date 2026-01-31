import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slidebar from "../components/slideBar";
import dineIn from "../../assets/images/dineIn.png";
import BillSplitCard from "../components/BillSplitCard";
import PaymentCard from "../components/PaymentCard";
import OrderSummaryChart from "../components/OrderSummaryChart";
import OrderSummaryCard from "../components/SummaryContainer";
import ManualOrderCard from "../components/ManualOrderCard";
import OrderBreakdownModal from "../components/OrderBreakdownModal";
import { FiPackage } from "react-icons/fi";
import {
  OrderSummaryContainer,
  ManualOrderContainer,
  SummaryContainer,
  OrderSummaryWrapper,
  OrderSummaryHeader,
  OrdersList,
  ChartWrapper,
  RightColumn,
  ScanButton,
  MiddleContainerWrapper,
  SplitCardContainer,
  HeaderBar
} from "../styles/orderBreakdown.style";

function OrderBreakdown() {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [rawText, setRawText] = useState("");
  const [aiProcessed, setAiProcessed] = useState(false);
  const [billTotal, setBillTotal] = useState(0);

  const [submittedOrders, setSubmittedOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [showPayment, setShowPayment] = useState(false);
  const [splitGroup, setSplitGroup] = useState({
    people: [],
    items: [],
  });

  const handleManualSubmit = async (order) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      const saved = await res.json();

      console.log("SAVED ORDER:", saved); // 🔍 debug once

      setSubmittedOrders((prev) => [...prev, saved]);
      setSelectedOrder(saved);

      const customerName =
        saved.customer || saved.customerName || order.customer;

      if (customerName) {
        setSplitGroup((prev) => ({
          people: Array.from(new Set([...prev.people, customerName])),
          items: prev.items,
        }));
      }
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  /* ================= REMOVE ORDER ================= */
  const handleRemove = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${id}`, {
      method: "DELETE",
    });

    setSubmittedOrders((prev) => prev.filter((o) => o.id !== id));

    if (selectedOrder?.id === id) {
      setSelectedOrder(null);
    }
  };

  /* ================= BILL MODAL ================= */
  useEffect(() => {
    const storedData = sessionStorage.getItem("billScanResult");
    if (!storedData) return;

    try {
      const parsed = JSON.parse(storedData);
      setItems(parsed.items || []);
      setBillTotal(Number(parsed.total) || 0);
      setRawText(parsed.rawText || "");
      setAiProcessed(parsed.aiProcessed);
      setShowModal(true);
    } catch (err) {
      console.error("Invalid bill scan data", err);
    }
  }, [location.key]);

  return (
    <OrderSummaryContainer $bg={dineIn}>
      <HeaderBar>
        <ScanButton
          disabled={!selectedOrder}
          onClick={() => setShowPayment(true)}
        >
          Scan & Pay
        </ScanButton>
      </HeaderBar>

      <OrderSummaryWrapper>
        <Slidebar />
        <MiddleContainerWrapper>
          <ManualOrderContainer>
            <ManualOrderCard onSubmit={handleManualSubmit} />
          </ManualOrderContainer>

          {/* ================= RIGHT COLUMN ================= */}
          <RightColumn>
            <SummaryContainer>
              <OrderSummaryHeader>
                <FiPackage />
                Submitted Orders
              </OrderSummaryHeader>

              <OrdersList>
                <OrderSummaryCard
                  orders={submittedOrders}
                  onRemove={handleRemove}
                  onSelect={setSelectedOrder}
                  selectedId={selectedOrder?.id}
                />
              </OrdersList>

              {submittedOrders.length > 0 && (
                <ChartWrapper>
                  <OrderSummaryChart orders={submittedOrders} />
                </ChartWrapper>
              )}
            </SummaryContainer>
            <SplitCardContainer>
              <BillSplitCard
                group={splitGroup}
                submittedOrders={submittedOrders}
                onAddSplitItem={(item) => {
                  // ✅ Mark food items as split (EXACT MATCH)
                  setSubmittedOrders((prev) =>
                    prev.map((order) => ({
                      ...order,
                      items: order.items.map((i) =>
                        `${i.name}-${i.price}` === item.id
                          ? { ...i, isSplit: true }
                          : i,
                      ),
                    })),
                  );

                  // ✅ Store split info
                  setSplitGroup((prev) => ({
                    ...prev,
                    items: [...prev.items, item],
                  }));
                }}
                onClearSplit={() => {
                  // ✅ Restore food items
                  setSubmittedOrders((prev) =>
                    prev.map((order) => ({
                      ...order,
                      items: order.items.map((i) => ({
                        ...i,
                        isSplit: false,
                      })),
                    })),
                  );

                  // ✅ Clear split state
                  setSplitGroup({
                    people: [],
                    items: [],
                  });
                }}
              />
            </SplitCardContainer>
          </RightColumn>
        </MiddleContainerWrapper>
      </OrderSummaryWrapper>

      {/* ================= PAYMENT POPUP ================= */}
      {showPayment && (
        <div
          onClick={() => setShowPayment(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(2,6,23,0.75)",
            backdropFilter: "blur(10px)",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: 380, maxWidth: "92%" }}
          >
            <PaymentCard order={selectedOrder} />

            <button
              onClick={() => setShowPayment(false)}
              style={{
                width: "100%",
                marginTop: 12,
                padding: 10,
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "#94a3b8",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= BILL MODAL ================= */}
      {showModal && (
        <OrderBreakdownModal
          items={items}
          billTotal={billTotal}
          rawText={rawText}
          aiProcessed={aiProcessed}
          onClose={() => setShowModal(false)}
        />
      )}
    </OrderSummaryContainer>
  );
}

export default OrderBreakdown;
