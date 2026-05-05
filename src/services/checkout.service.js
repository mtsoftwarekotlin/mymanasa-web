export async function createCheckoutSession(payload) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error("Missing VITE_API_BASE_URL environment variable.");
  }

  const response = await fetch(`${apiBaseUrl}/create-checkout-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || "Could not create checkout session.");
  }

  if (!data?.checkoutUrl) {
    throw new Error("Checkout URL was not returned by the server.");
  }

  return data;
}