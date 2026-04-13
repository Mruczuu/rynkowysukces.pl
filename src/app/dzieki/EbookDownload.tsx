"use client";

/** ID pliku z linku: .../file/d/THIS_ID/view */
const DRIVE_FILE_ID = "1nGaLWqVNBCRKHFED_nkqc5MzP_4qTUcc";

/**
 * Google Drive — wymusza pobranie pliku zamiast otwarcia podglądu w przeglądarce.
 * (Plik musi być udostępniony: „Każdy z linkiem”.)
 */
function driveDirectDownloadUrl(fileId: string) {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

/** Pobieranie tylko po kliknięciu — bez auto-otwierania przy wejściu na stronę */
export function EbookDownload() {
  const href = driveDirectDownloadUrl(DRIVE_FILE_ID);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-gold-light"
      >
        Pobierz E-book (PDF)
      </a>
      <p className="max-w-sm text-center text-xs text-muted">
        Kliknij przycisk i pobierz E-book (PDF).
      </p>
    </div>
  );
}
