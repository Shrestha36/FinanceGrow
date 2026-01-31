export const scanBill = async (file) => {
  const formData = new FormData();
  formData.append("bill", file);

  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bill-scan`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};
