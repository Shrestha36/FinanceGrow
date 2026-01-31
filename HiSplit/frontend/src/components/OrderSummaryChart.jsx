import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function OrderSummaryChart({ orders }) {
  if (!orders.length) {
    return <p style={{ opacity: 0.6 }}>No data to display</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart
        data={orders}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        {/* Gradient */}
        <defs>
          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        {/* Grid */}
        <CartesianGrid
          strokeDasharray="3 6"
          vertical={true}
          horizontal={false}
          stroke="#334155"
        />

        {/* Axes */}
        <XAxis
          dataKey="customer"
          stroke="#cbd5f5"
          tick={{ fontSize: 12 }}
        />
        <YAxis
          stroke="#cbd5f5"
          tick={{ fontSize: 12 }}
        />

        {/* Tooltip */}
        <Tooltip
          contentStyle={{
            background: "#020617",
            border: "1px solid #334155",
            borderRadius: 8,
            color: "#e5e7eb",
          }}
        />

        {/* Area */}
        <Area
          type="monotone"
          dataKey="total"
          stroke="#f59e0b"
          strokeWidth={3}
          fill="url(#colorTotal)"
          dot={false}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default OrderSummaryChart;
