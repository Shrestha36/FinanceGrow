const BASE_URL = import.meta.env.VITE_API_URL + "/api/expenses";

// get expense rows
export const getExpenses = async (userEmail) => {
  const res = await fetch(`${BASE_URL}?userEmail=${userEmail}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

// add expense row
export const addExpense = async (expense) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

// delete expense row
export const deleteExpense = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error(await res.text());
};

// analytics
export const getExpenseAnalytics = async (mode, userEmail) => {
  const res = await fetch(
    `${BASE_URL}/analytics?mode=${mode}&userEmail=${userEmail}`
  );

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};
