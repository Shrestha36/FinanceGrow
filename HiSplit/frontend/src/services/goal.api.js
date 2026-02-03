const BASE_URL = import.meta.env.VITE_API_URL + "/api/goals";

export const getGoal = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const saveGoal = async (amount) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  return res.json();
};
