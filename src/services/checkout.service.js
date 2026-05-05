export async function createCheckoutSession(payload) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!apiBaseUrl) {
    throw new Error("Missing VITE_API_BASE_URL environment variable.");
  }

  if (!supabaseAnonKey) {
    throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable.");
  }

  const response = await fetch(`${apiBaseUrl}/create-checkout-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(payload),
  });

  let data;

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