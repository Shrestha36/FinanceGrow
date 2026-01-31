function ProgressRing({ percentage, size = 120, stroke = 10 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percentage) / 100;

  return (
    <svg width={size} height={size}>
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={stroke}
        fill="none"
      />

      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#22d3ee"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />

      {/* Percentage text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="6"
        fill="white"
        fontSize="18"
        fontWeight="600"
      >
        {Math.round(percentage)}%
      </text>
    </svg>
  );
}

export default ProgressRing;
