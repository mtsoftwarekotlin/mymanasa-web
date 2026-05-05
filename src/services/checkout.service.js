function buildApiUrl(path) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error("Missing VITE_API_BASE_URL environment variable.");
  }

  return `${apiBaseUrl}${path}`;
}

async function parseResponse(response) {
  let data ;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const error = new Error(data?.message || "Request failed.");
    error.code = data?.code;
    error.status = response.status;
    throw error;
  }

  return data;
}

export async function createCheckoutSession(payload) {
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseAnonKey) {
    throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable.");
  }

  const response = await fetch(buildApiUrl("/create-checkout-session"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await parseResponse(response);

  if (!data?.checkoutUrl) {
    throw new Error("Checkout URL was not returned by the server.");
  }

  return data;
}

export async function continueCheckoutSession(accessToken) {
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseAnonKey) {
    throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable.");
  }

  if (!accessToken) {
    throw new Error("Missing user session.");
  }

  const response = await fetch(buildApiUrl("/continue-checkout-session"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await parseResponse(response);

  if (!data?.checkoutUrl) {
    throw new Error("Checkout URL was not returned by the server.");
  }

  return data;
}