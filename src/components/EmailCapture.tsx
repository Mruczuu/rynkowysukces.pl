"use client";

import { useState } from "react";
import { Button } from "./Button";

export function EmailCapture({ buttonText = "Pobierz darmowy ebook" }: { buttonText?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Email captured:", email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 px-6 py-5 text-center">
        <p className="text-lg font-semibold text-gold">Gotowe.</p>
        <p className="mt-1 text-sm text-muted">
          Sprawdź skrzynkę. Ebook jest w drodze.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Twój E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-lg border border-border bg-surface-light px-5 py-3.5 text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors"
      />
      <Button type="submit" variant="primary" size="default">
        {buttonText}
      </Button>
    </form>
  );
}
