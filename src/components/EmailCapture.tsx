"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { createBrowserClient } from "@/lib/supabase/client";

/** Prosty regex — wystarczający do podstawowej walidacji formatu email */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCapture({ buttonText = "Pobierz za darmo nasz E-book" }: { buttonText?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmed = email.trim();

    // Walidacja: niepusty
    if (!trimmed) {
      setErrorMessage("Podaj adres email.");
      return;
    }

    // Walidacja: wygląda jak email
    if (!EMAIL_REGEX.test(trimmed)) {
      setErrorMessage("Podaj poprawny adres email.");
      return;
    }

    setSubmitting(true);

    try {
      // Klient Supabase (tylko frontend + klucz anon)
      const supabase = createBrowserClient();

      // INSERT do tabeli leads — kolumna email musi być unikalna
      const { error } = await supabase.from("leads").insert({ email: trimmed });

      if (error) {
        // Błąd unikalności (email już w bazie)
        if (error.code === "23505") {
          console.error("[leads] Ten email jest już zapisany:", error.message);
          setErrorMessage("Ten adres jest już zapisany.");
          return;
        }
        console.error("[leads] Błąd Supabase:", error.message, error);
        setErrorMessage("Coś poszło nie tak. Spróbuj ponownie za chwilę.");
        return;
      }

      // Sukces → przekierowanie na stronę podziękowania
      router.push("/dzieki");
    } catch (err) {
      console.error("[leads] Nieoczekiwany błąd:", err);
      if (err instanceof Error && err.message === "SUPABASE_ENV_MISSING") {
        setErrorMessage(
          "Brak konfiguracji Supabase. W pliku .env uzupełnij NEXT_PUBLIC_SUPABASE_URL i NEXT_PUBLIC_SUPABASE_ANON_KEY, zapisz plik i uruchom ponownie npm run dev. Na Vercelu dodaj te same zmienne w Settings → Environment Variables."
        );
      } else {
        setErrorMessage("Problem z siecią lub serwerem. Spróbuj za chwilę.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex flex-1 flex-col gap-1">
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Twój E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
          className="w-full rounded-lg border border-border bg-surface-light px-5 py-3.5 text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors disabled:opacity-60"
        />
        {errorMessage ? (
          <p className="text-xs text-red-400" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        variant="primary"
        size="default"
        className="shrink-0"
        disabled={submitting}
      >
        {submitting ? "Zapisywanie…" : buttonText}
      </Button>
    </form>
  );
}
