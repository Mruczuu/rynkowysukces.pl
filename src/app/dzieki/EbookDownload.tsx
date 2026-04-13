"use client";

import { useEffect, useRef } from "react";

/** ID pliku z linku: .../file/d/THIS_ID/view */
const DRIVE_FILE_ID = "1nGaLWqVNBCRKHFED_nkqc5MzP_4qTUcc";

/**
 * Google Drive — wymusza pobranie pliku zamiast otwarcia podglądu w przeglądarce.
 * (Plik musi być udostępniony: „Każdy z linkiem”.)
 */
function driveDirectDownloadUrl(fileId: string) {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export function EbookDownload() {
  const triedAuto = useRef(false);

  useEffect(() => {
    if (triedAuto.current) return;
    triedAuto.current = true;

    const url = driveDirectDownloadUrl(DRIVE_FILE_ID);
    // Nowa karta: użytkownik zostaje na /dzieki, a pobieranie startuje w tle
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      // Zablokowany popup — użytkownik użyje przycisku poniżej
      console.warn("[ebook] Popup zablokowany — użyj przycisku „Pobierz ebook”.");
    }
  }, []);

  const href = driveDirectDownloadUrl(DRIVE_FILE_ID);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-gold-light"
      >
        Pobierz ebook (PDF)
      </a>
      <p className="max-w-sm text-center text-xs text-muted">
        Jeśli pobieranie nie ruszyło automatycznie, kliknij przycisk powyżej.
        Na Dysku czasem pojawi się dodatkowe okno potwierdzenia — to normalne.
      </p>
    </div>
  );
}
