"use client";

import { useEffect, useState } from "react";

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

const DOMAINS = [
  "gmail.com",
  "wp.pl",
  "op.pl",
  "interia.pl",
  "onet.pl",
  "outlook.com",
  "icloud.com",
] as const;

const LOWER = "abcdefghijklmnopqrstuvwxyz";

function randomChar() {
  return pick(LOWER.split(""));
}

/**
 * Zmyślony, za każdym razem inny „zmaskowany” adres — wygląda jak prawdziwy, ale to RNG.
 * Nie mapuje się na żadnego użytkownika.
 */
function randomMaskedEmail(): string {
  const domain = pick(DOMAINS);
  const pattern = Math.floor(Math.random() * 3);
  let local: string;
  if (pattern === 0) {
    local = `${randomChar()}***${randomChar()}`;
  } else if (pattern === 1) {
    local = `${randomChar()}${randomChar()}**${randomChar()}`;
  } else {
    local = `${randomChar()}****${randomChar()}${randomChar()}`;
  }
  return `${local}@${domain}`;
}

const DOWNLOAD_VERBS = [
  "właśnie pobrał bezpłatny E-book",
  "właśnie pobrała bezpłatny E-book",
  "pobrał bezpłatny E-book",
  "pobrała bezpłatny E-book",
  "właśnie ściągnął bezpłatny E-book",
  "właśnie ściągnęła bezpłatny E-book",
] as const;

function randomDownloadLine(): string {
  const email = randomMaskedEmail();
  const line = pick(DOWNLOAD_VERBS);
  return `${email} ${line}`;
}

const INITIALS = "ABCDEFGHIJKLMNOPRSTWZKĆŁŃÓŚŹŻ".split("");

const MALE_FIRST = [
  "Oskar",
  "Michał",
  "Kuba",
  "Piotr",
  "Bartek",
  "Łukasz",
  "Adam",
  "Tomek",
  "Marcin",
  "Kamil",
  "Dawid",
  "Mateusz",
] as const;

const FEMALE_FIRST = [
  "Anna",
  "Natalia",
  "Ewa",
  "Karolina",
  "Marta",
  "Joanna",
  "Aleksandra",
  "Zuzanna",
  "Julia",
  "Magda",
  "Kasia",
  "Ola",
] as const;

function randomPurchaseLine(): string {
  const useMale = Math.random() < 0.5;
  const first = useMale ? pick(MALE_FIRST) : pick(FEMALE_FIRST);
  const initial = pick(INITIALS);
  const name = `${first} ${initial}.`;
  const verb = useMale ? "kupił" : "kupiła";
  return `${name} ${verb} dostęp do „Jedno narzędzie”`;
}

/**
 * Losowy komunikat FOMO — za każdym razem inna „postać” (RNG), zero danych z bazy.
 * Wyłącznie symulacja aktywności dla efektu psychologicznego (~75% pobranie E-booka, ~25% zakup).
 */
function randomFomoMessage(): string {
  // ~75% „pobrał E-book”, ~25% „kupił narzędzie”
  const downloadBias = 0.75;
  return Math.random() < downloadBias
    ? randomDownloadLine()
    : randomPurchaseLine();
}

/**
 * Toast FOMO: lewy dolny róg, komunikaty generowane losowo (nieprawdziwe),
 * odstępy czasowe też losowe — buduje wrażenie „żywej” strony.
 */
export function FomoToast() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let alive = true;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    (async () => {
      await sleep(3000 + Math.random() * 4000);
      while (alive) {
        setText(randomFomoMessage());
        setVisible(true);
        await sleep(4000 + Math.random() * 2000);
        if (!alive) break;
        setVisible(false);
        await sleep(8000 + Math.random() * 10000);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  if (!text) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-4 left-4 z-[100] max-w-[min(100vw-2rem,20rem)] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0"
      }`}
    >
      <div className="rounded-lg border border-border bg-surface/95 px-3.5 py-2.5 text-xs leading-snug text-foreground shadow-xl backdrop-blur-sm md:text-[13px]">
        <p className="font-medium text-gold/95">Teraz</p>
        <p className="mt-1 text-muted">{text}</p>
      </div>
    </div>
  );
}
