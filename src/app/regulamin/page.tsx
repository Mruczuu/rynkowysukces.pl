import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin — RynkowySukces",
};

export default function Regulamin() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 md:py-24">
      <a
        href="/"
        className="inline-block text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        ← Wróć na stronę główną
      </a>

      <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
        Regulamin
      </h1>
      <p className="mt-2 text-sm text-muted">
        Ostatnia aktualizacja: 31 marca 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-bold text-foreground">1. Postanowienia ogólne</h2>
          <p className="mt-2">
            Niniejszy regulamin określa zasady korzystania ze strony internetowej
            rynkowysukces.pl oraz zakupu produktów cyfrowych oferowanych przez
            RynkowySukces, prowadzony przez Pawła Wichrowskiego.
          </p>
          <p className="mt-2">
            Korzystając ze strony i dokonując zakupu, akceptujesz poniższe warunki
            w całości.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">2. Definicje</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong>Sprzedawca</strong> — RynkowySukces, Paweł Wichrowski</li>
            <li><strong>Klient</strong> — osoba fizyczna dokonująca zakupu produktu</li>
            <li><strong>Produkt</strong> — ebook w formacie PDF oraz/lub narzędzie (skrypt/wskaźnik) do platformy TradingView</li>
            <li><strong>Narzędzie</strong> — autorski skrypt/wskaźnik przeznaczony do użytku na platformie TradingView</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">3. Produkty i ich charakter</h2>
          <p className="mt-2">
            Oferowane produkty mają charakter wyłącznie edukacyjny i informacyjny.
          </p>
          <div className="mt-3 rounded-lg border border-gold/20 bg-gold/5 p-4">
            <p className="font-semibold text-gold">Ważne zastrzeżenie:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                Żaden z oferowanych produktów <strong>nie stanowi porady inwestycyjnej</strong>,
                rekomendacji ani zachęty do inwestowania.
              </li>
              <li>
                Korzystanie z ebooka oraz narzędzia do TradingView odbywa się
                <strong> wyłącznie na własną odpowiedzialność</strong> Klienta.
              </li>
              <li>
                Sprzedawca nie ponosi odpowiedzialności za decyzje inwestycyjne
                podjęte na podstawie treści zawartych w produktach.
              </li>
              <li>
                Wyniki prezentowane na stronie są indywidualnymi wynikami
                poszczególnych użytkowników i nie gwarantują osiągnięcia
                podobnych rezultatów.
              </li>
              <li>
                Trading i inwestowanie wiąże się z ryzykiem utraty kapitału.
                Nigdy nie inwestuj więcej, niż możesz sobie pozwolić stracić.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">4. Składanie zamówień</h2>
          <p className="mt-2">
            Zamówienie składa się poprzez wypełnienie formularza na stronie i
            dokonanie płatności. Po zaksięgowaniu płatności Klient otrzymuje
            dostęp do produktu drogą elektroniczną (e-mail lub dostęp do
            narzędzia na platformie TradingView).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">5. Ceny i płatności</h2>
          <p className="mt-2">
            Wszystkie ceny podane na stronie są cenami brutto wyrażonymi w
            złotych polskich (PLN). Płatności realizowane są za pośrednictwem
            zewnętrznego operatora płatności.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">6. Dostawa produktów cyfrowych</h2>
          <p className="mt-2">
            Ebook dostarczany jest w formacie PDF na adres e-mail podany przy
            zamówieniu. Narzędzie do TradingView udostępniane jest poprzez
            przyznanie dostępu do skryptu na platformie TradingView. Dostawa
            odbywa się niezwłocznie po zaksięgowaniu płatności, nie później niż
            w ciągu 24 godzin.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">7. Narzędzie do TradingView</h2>
          <p className="mt-2">
            Narzędzie jest autorskim skryptem przeznaczonym do użytku na
            platformie TradingView. Klient otrzymuje licencję na użytek osobisty.
            Zabrania się:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Udostępniania narzędzia osobom trzecim</li>
            <li>Kopiowania, modyfikowania lub dekompilacji kodu źródłowego</li>
            <li>Odsprzedaży narzędzia</li>
            <li>Wykorzystywania narzędzia w celach komercyjnych bez zgody Sprzedawcy</li>
          </ul>
          <p className="mt-2">
            Działanie narzędzia zależy od platformy TradingView i Sprzedawca nie
            ponosi odpowiedzialności za zmiany w funkcjonowaniu platformy, które
            mogą wpłynąć na działanie narzędzia.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">8. Prawo odstąpienia od umowy</h2>
          <p className="mt-2">
            Zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta, prawo
            odstąpienia od umowy nie przysługuje w przypadku dostarczenia treści
            cyfrowych, które nie są zapisane na nośniku materialnym, jeżeli
            spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta
            przed upływem terminu do odstąpienia od umowy.
          </p>
          <p className="mt-2">
            Mimo to oferujemy 30-dniową gwarancję satysfakcji. Jeśli produkt nie
            spełni Twoich oczekiwań, skontaktuj się z nami w ciągu 30 dni od
            zakupu, a zwrócimy Ci pieniądze.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">9. Prawa autorskie</h2>
          <p className="mt-2">
            Wszystkie materiały dostępne na stronie oraz w produktach (teksty,
            grafiki, skrypty, narzędzia) są własnością RynkowySukces i podlegają
            ochronie prawnoautorskiej. Kopiowanie, rozpowszechnianie lub
            udostępnianie bez pisemnej zgody jest zabronione.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">10. Odpowiedzialność</h2>
          <p className="mt-2">
            Sprzedawca dokłada wszelkich starań, aby treści zawarte w produktach
            były rzetelne i aktualne. Jednakże:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Nie gwarantujemy osiągnięcia jakichkolwiek wyników finansowych</li>
            <li>Nie ponosimy odpowiedzialności za straty poniesione w wyniku stosowania wiedzy z ebooka lub sygnałów z narzędzia</li>
            <li>Klient jest wyłącznie odpowiedzialny za swoje decyzje inwestycyjne</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">11. Reklamacje</h2>
          <p className="mt-2">
            Reklamacje można składać drogą elektroniczną na adres:
            kontakt@rynkowysukces.pl. Reklamacja zostanie rozpatrzona w ciągu 14
            dni roboczych od jej otrzymania.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">12. Postanowienia końcowe</h2>
          <p className="mt-2">
            W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
            przepisy prawa polskiego. Sprzedawca zastrzega sobie prawo do zmiany
            regulaminu. Zmiany wchodzą w życie z chwilą ich publikacji na stronie
            rynkowysukces.pl.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">13. Kontakt</h2>
          <p className="mt-2">
            RynkowySukces — Paweł Wichrowski<br />
            E-mail: kontakt@rynkowysukces.pl<br />
            Strona: rynkowysukces.pl
          </p>
        </section>
      </div>
    </main>
  );
}
