"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProofTileProps = {
  /** Ścieżka w /public, np. /wynik-transakcji.png */
  src: string;
  /** Tekst pod kafelkiem */
  caption: string;
  alt: string;
};

/**
 * Kwadratowy kafelek ze screenem + podpis.
 * Klik w obrazek → lightbox (powiększenie). ESC / tło / „Zamknij” zamyka.
 */
export function ProofTile({ src, caption, alt }: ProofTileProps) {
  const [failed, setFailed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [expanded]);

  const lightbox =
    expanded && mounted ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={alt}
        onClick={() => setExpanded(false)}
      >
        <button
          type="button"
          className="absolute right-4 top-4 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground hover:bg-surface-light"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
        >
          Zamknij
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-h-[min(90vh,900px)] max-w-[min(95vw,1000px)] cursor-default rounded-lg object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    ) : null;

  return (
    <figure className="flex flex-col items-center gap-3">
      <button
        type="button"
        disabled={failed}
        onClick={() => !failed && setExpanded(true)}
        title={failed ? undefined : "Kliknij, aby powiększyć"}
        aria-label={
          failed ? undefined : `${alt}. Kliknij, aby powiększyć obrazek.`
        }
        className="group relative aspect-square w-full max-w-[180px] cursor-zoom-in overflow-hidden rounded-xl border border-border bg-background shadow-md transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-default sm:max-w-[200px]"
      >
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt=""
            aria-hidden
            className="pointer-events-none h-full w-full object-contain object-center p-1.5"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-3 text-center">
            <span className="text-[11px] font-medium text-gold/90">Wkrótce</span>
            <span className="text-[10px] leading-snug text-muted">
              Wrzuć plik do{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-[9px] text-foreground/70">
                public{src}
              </code>
            </span>
          </div>
        )}
        {!failed ? (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/25 group-hover:opacity-100 group-focus-visible:bg-black/25 group-focus-visible:opacity-100">
            <span className="rounded-full bg-gold/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
              Powiększ
            </span>
          </span>
        ) : null}
      </button>
      <figcaption className="max-w-[200px] text-center text-xs leading-snug text-muted sm:text-sm">
        {caption}
      </figcaption>

      {mounted && lightbox
        ? createPortal(lightbox, document.body)
        : null}
    </figure>
  );
}
