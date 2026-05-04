export async function createCheckoutSession(payload) {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/create-checkout-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Could not create checkout session");
  }

  return data;
}