import { EmailCapture } from "@/components/EmailCapture";
import { Button } from "@/components/Button";
import { ProofTile } from "@/components/ProofTile";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden px-5 py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            2 647 traderów już korzysta z narzędzia
          </p>

          <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Tracisz transakcje,
            <br />
            które powinieneś{" "}
            <span className="text-gold">wygrywać.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Kompletny przewodnik jak zawierać transakcje używając mojego narzędzia.
            2 647 traderów już korzysta.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "3 potwierdzenia z rynku, które umożliwiają wejście w transakcję odrzucając nadmierne ryzyko",
              "Przewodnik zarządzania ryzykiem, który chroni Twój kapitał",
              "Konkretne miejsca na wykresie, gdzie możesz zawierać transakcje",
              "Zmiana psychologii stojąca za 87% skutecznością",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <EmailCapture buttonText="Pobierz za darmo nasz E-book" />
          </div>

          <p className="mt-4 text-[11px] text-muted/70">
            Pobierz za darmo nasz E-book.
          </p>
        </div>
      </section>

      {/* ─── PROOF ─── */}
      <section className="border-y border-border bg-surface px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-4xl font-extrabold md:text-5xl">
              <span className="text-gold">52 700 zł</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Tyle zarobił jeden z czytelników w ciągu miesiąca. Jeden ebook. Jedno narzędzie.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-xl border border-border bg-background p-5">
              <p className="text-sm leading-relaxed text-foreground/80">
                &ldquo;Przez 2 lata traciłem pieniądze nie posiadając odpowiedniej wiedzy,
                lecz po przeczytaniu tego ebooka znalazłem system, który pozwolił
                mi odrobić straty w ciągu 6 tygodni.&rdquo;
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  M
                </div>
                <div>
                  <p className="text-xs font-semibold">Marcin T.</p>
                  <p className="text-[11px] text-gold">+37 350 zł w pierwszym miesiącu</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-border bg-background p-5">
              <p className="text-sm leading-relaxed text-foreground/80">
                &ldquo;Sama sekcja o zarządzaniu ryzykiem bije każdy kurs za 5 000 PLN,
                na który wydałem pieniądze. Tego nikt nie uczy.&rdquo;
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  D
                </div>
                <div>
                  <p className="text-xs font-semibold">Dawid R.</p>
                  <p className="text-[11px] text-gold">72% skuteczności po 47 dniach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WYNIKI I OPINIE (2×2 — górne 2: screeny wyników, dolne 2: opinie) ─── */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Realne wyniki naszych czytelników
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Nie wierz nam na słowo — zobacz sam
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 md:mx-auto md:max-w-2xl">
            <ProofTile
              src="/wynik-transakcji.png"
              caption="XAUUSD — 3 450,76 USD zysku z miesiąca pracy z narzędziem"
              alt="Screen: wynik miesięczny na złocie w USD"
            />
            <ProofTile
              src="/podsumowanie-konta.png"
              caption="Saldo 406 USD z jednego dnia handlu na złocie (XAUUSD)"
              alt="Screen: saldo z jednego dnia na XAUUSD w USD"
            />
            <ProofTile
              src="/opinia-2.png"
              caption="Opinia — pierwszy miesiąc na plusie"
              alt="Opinia klienta z czatu"
            />
            <ProofTile
              src="/opinia-1.png"
              caption="Opinia — 72% skuteczności po 2 tygodniach"
              alt="Opinia klienta — 72% skuteczności"
            />
          </div>
        </div>
      </section>

      {/* ─── UPSELL ─── */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-gold/20 bg-surface p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Darmowy ebook to tylko 20% systemu
            </p>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Chcesz pełny system?
            </h2>

            <p className="mt-3 text-sm text-muted leading-relaxed">
              Odblokuj narzędzie, dzięki któremu stworzysz realną przewagę na rynku
              i zaczniesz zarabiać prawdziwe pieniądze.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Autorskie narzędzie Pawła Wichrowskiego z ponad 3-letnim stażem",
                "Jedno narzędzie, które możesz natychmiastowo wykorzystać w swoim tradingu",
                "Psychologia rynku — jak duzi gracze łapią nieświadomych traderów w pułapki",
                "Dożywotnie aktualizacje — nowe strategie co kwartał",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="#" variant="primary" size="lg">
                Odblokuj pełny system — 499 PLN
              </Button>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted line-through">759 PLN</span>
                <span className="text-xs text-muted">cena premierowa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border px-5 py-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between text-[11px] text-muted/60">
          <p>© {new Date().getFullYear()} RynkowySukces</p>
          <div className="flex gap-4">
            <a href="/polityka-prywatnosci" className="hover:text-muted transition-colors">Polityka prywatności</a>
            <a href="/regulamin" className="hover:text-muted transition-colors">Regulamin</a>
          </div>
        </div>
      </footer>
    </>
  );
}
