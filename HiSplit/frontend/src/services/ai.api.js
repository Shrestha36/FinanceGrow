const BASE_URL = "http://localhost:5001/api";

export const getAIInsights = async (payload) => {
  const res = await fetch(`${BASE_URL}/ai-insights`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "AI request failed");
  }

  return res.json();
};
