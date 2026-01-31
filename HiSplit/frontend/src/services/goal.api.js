const BASE_URL = "http://localhost:5001/api/goals";

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
