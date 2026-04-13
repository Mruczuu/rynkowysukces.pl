-- ============================================================
-- Tabela leads — uruchom w Supabase: SQL Editor → New query → Run
-- ============================================================

-- Usuń starą tabelę tylko jeśli chcesz zacząć od zera (opcjonalnie):
-- DROP TABLE IF EXISTS public.leads;

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT leads_email_unique UNIQUE (email)
);

-- Komentarze w katalogu (opcjonalnie, pomaga w UI Supabase)
COMMENT ON TABLE public.leads IS 'Zapisane emaile z landing page';
COMMENT ON COLUMN public.leads.email IS 'Adres email (unikalny)';

-- ============================================================
-- Row Level Security — wymagane przy zapisie z frontendu (anon key)
-- ============================================================

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Idempotentne ponowne uruchomienie skryptu
DROP POLICY IF EXISTS "leads_insert_anon" ON public.leads;

-- Pozwól anonimowym użytkownikom (klucz anon) tylko INSERT
CREATE POLICY "leads_insert_anon"
  ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Opcjonalnie: zablokuj odczyt listy leadów z klienta (domyślnie brak SELECT = brak dostępu)
-- Nie tworzymy polityki SELECT dla anon — tylko Ty widzisz dane w panelu Supabase jako service role.
