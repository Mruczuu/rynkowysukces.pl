import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności — RynkowySukces",
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 md:py-24">
      <a
        href="/"
        className="inline-block text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        ← Wróć na stronę główną
      </a>

      <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
        Polityka Prywatności
      </h1>
      <p className="mt-2 text-sm text-muted">
        Ostatnia aktualizacja: 31 marca 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-bold text-foreground">1. Administrator danych</h2>
          <p className="mt-2">
            Administratorem Twoich danych osobowych jest RynkowySukces, prowadzony
            przez Pawła Wichrowskiego, z siedzibą w Polsce. Kontakt:
            kontakt@rynkowysukces.pl.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">2. Jakie dane zbieramy</h2>
          <p className="mt-2">
            Zbieramy wyłącznie dane, które sam nam podajesz:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Adres e-mail — podany w formularzu zapisu na darmowy ebook</li>
            <li>Dane transakcyjne — w przypadku zakupu płatnego ebooka lub narzędzia do platformy TradingView (przetwarzane przez operatora płatności)</li>
          </ul>
          <p className="mt-2">
            Nie zbieramy danych wrażliwych. Nie profilujemy użytkowników w celach
            reklamowych wobec osób trzecich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">3. Cel przetwarzania danych</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Wysyłka darmowego ebooka na podany adres e-mail</li>
            <li>Realizacja zamówień na płatne produkty (ebook, narzędzie do TradingView)</li>
            <li>Komunikacja związana z zamówieniem i obsługą klienta</li>
            <li>Wysyłka newslettera z treściami edukacyjnymi (za Twoją zgodą)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">4. Podstawa prawna</h2>
          <p className="mt-2">
            Dane przetwarzamy na podstawie: Twojej zgody (art. 6 ust. 1 lit. a RODO),
            wykonania umowy (art. 6 ust. 1 lit. b RODO) oraz prawnie uzasadnionego
            interesu administratora (art. 6 ust. 1 lit. f RODO).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">5. Udostępnianie danych</h2>
          <p className="mt-2">
            Twoje dane mogą być przekazywane wyłącznie zaufanym podmiotom
            przetwarzającym: dostawcy usług e-mail marketingu, operatorowi płatności
            oraz dostawcy hostingu. Nie sprzedajemy Twoich danych osobom trzecim.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">6. Okres przechowywania</h2>
          <p className="mt-2">
            Dane przechowujemy tak długo, jak jest to niezbędne do realizacji celów,
            dla których zostały zebrane, lub do momentu wycofania zgody. Dane
            transakcyjne przechowujemy przez okres wymagany przepisami prawa
            podatkowego.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">7. Twoje prawa</h2>
          <p className="mt-2">Masz prawo do:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Dostępu do swoich danych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych (&ldquo;prawo do bycia zapomnianym&rdquo;)</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przeniesienia danych</li>
            <li>Wycofania zgody w dowolnym momencie</li>
            <li>Wniesienia skargi do Prezesa UODO</li>
          </ul>
          <p className="mt-2">
            W celu realizacji swoich praw skontaktuj się z nami: kontakt@rynkowysukces.pl.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">8. Pliki cookies</h2>
          <p className="mt-2">
            Strona może wykorzystywać pliki cookies w celach analitycznych i
            funkcjonalnych. Możesz zarządzać ustawieniami cookies w swojej
            przeglądarce. Korzystanie ze strony bez zmiany ustawień oznacza
            zgodę na stosowanie cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">9. Zmiany polityki</h2>
          <p className="mt-2">
            Zastrzegamy sobie prawo do zmiany niniejszej polityki prywatności.
            O wszelkich zmianach poinformujemy na stronie rynkowysukces.pl.
          </p>
        </section>
      </div>
    </main>
  );
}
