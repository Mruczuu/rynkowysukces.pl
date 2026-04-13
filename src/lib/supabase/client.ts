import { createClient } from "@supabase/supabase-js";

/**
 * Klient Supabase do użycia w przeglądarce (komponenty "use client").
 * Używa wyłącznie klucza anon — bezpieczny do wysłania do frontendu.
 */
export function createBrowserClient() {
  // trim() — często w .env zostaje spacja po znaku =
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";

  if (!url || !anonKey) {
    throw new Error("SUPABASE_ENV_MISSING");
  }

  return createClient(url, anonKey);
}
