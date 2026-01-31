const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export const getExpenses = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addExpense = async (expense) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  return res.json();
};

export const deleteExpense = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Delete failed");
};

export const getExpenseAnalytics = async (mode) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/expenses/analytics?mode=${mode}`
  );
  return res.json();
};
