export async function submitContactForm(data: {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  message: string;
}) {
  const res = await fetch("https://athratech.onrender.com/api/form/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Something went wrong");
  }

  return res.json();
}
