const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export const saveExpenseAnalysis = async (payload) => {
  const res = await fetch(`${BASE_URL}/expense-analysis`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Save failed");
  return res.json();
};

export const getExpenseAnalysis = async (userEmail) => {
  const res = await fetch(
    `${BASE_URL}/expense-analysis?userEmail=${userEmail}`
  );

  if (res.status === 204) return null;
  if (!res.ok) throw new Error("Fetch failed");

  return res.json();
};
