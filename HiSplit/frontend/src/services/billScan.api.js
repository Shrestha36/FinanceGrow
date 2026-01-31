export const scanBill = async (file) => {
  const formData = new FormData();
  formData.append("bill", file);

  const res = await fetch("http://localhost:5001/api/bill-scan", {
    method: "POST",
    body: formData,
  });

  return res.json();
};
