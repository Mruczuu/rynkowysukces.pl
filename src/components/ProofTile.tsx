"use client";

import { useState } from "react";

type ProofTileProps = {
  /** Ścieżka w /public, np. /wynik-transakcji.png */
  src: string;
  /** Tekst pod kafelkiem */
  caption: string;
  alt: string;
};

/**
 * Kwadratowy kafelek ze screenem + podpis.
 * Gdy plik nie istnieje (404) — pokazuje placeholder z nazwą pliku (łatwiej wrzucić grafikę).
 */
export function ProofTile({ src, caption, alt }: ProofTileProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-xl border border-border bg-background shadow-md sm:max-w-[200px]">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain object-center p-1.5"
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
      </div>
      <figcaption className="max-w-[200px] text-center text-xs leading-snug text-muted sm:text-sm">
        {caption}
      </figcaption>
    </figure>
  );
}
