import type { Metadata } from "next";
import Link from "next/link";
import { EbookDownload } from "./EbookDownload";

export const metadata: Metadata = {
  title: "Dziękujemy — RynkowySukces",
};

export default function DziekiPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-lg flex-col items-center justify-center px-5 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        RynkowySukces
      </p>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">
        Dziękujemy!
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Twój email został zapisany.
      </p>

      <EbookDownload />

      <Link
        href="/"
        className="mt-10 text-sm text-gold underline underline-offset-4 hover:text-gold-light"
      >
        Wróć na stronę główną
      </Link>
    </main>
  );
}
