-- ============================================================
-- MÓDULO 01 — WALLET [COMPLETO]
-- Multi-saldo por utilizador + ledger de transações.
-- Valores monetários em cêntimos de Kwanza (bigint) para evitar float.
-- ============================================================

CREATE TABLE IF NOT EXISTS "wallets" (
  "id" text PRIMARY KEY NOT NULL,
  "userId" text NOT NULL UNIQUE,
  "mainBalance" bigint NOT NULL DEFAULT 0,      -- dinheiro real depositado
  "playableBalance" bigint NOT NULL DEFAULT 0,  -- saldo jogável (após fee)
  "bonusBalance" bigint NOT NULL DEFAULT 0,     -- bónus/promoções
  "rewardBalance" bigint NOT NULL DEFAULT 0,    -- ganhos de partidas
  "lockedBalance" bigint NOT NULL DEFAULT 0,    -- retenção/colapso
  "seasonalBalance" bigint NOT NULL DEFAULT 0,  -- eventos/temporada
  "vipBalance" bigint NOT NULL DEFAULT 0,       -- premium
  "currency" text NOT NULL DEFAULT 'AOA',
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "updatedAt" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "wallets_userId_idx" ON "wallets" ("userId");

CREATE TABLE IF NOT EXISTS "transactions" (
  "id" text PRIMARY KEY NOT NULL,
  "userId" text NOT NULL,
  "type" text NOT NULL,        -- deposit | withdraw | fee | payout | tax | sink | bonus | transfer
  "wallet" text NOT NULL DEFAULT 'main', -- qual saldo foi afetado
  "amount" bigint NOT NULL,    -- positivo=crédito, negativo=débito
  "balanceAfter" bigint,
  "status" text NOT NULL DEFAULT 'completed', -- pending | completed | failed | reversed
  "provider" text,             -- stripe | express | unitel | africell | manual
  "reference" text,            -- id externo (stripe session, etc.)
  "matchId" text,              -- se relacionado a partida
  "metadata" jsonb NOT NULL DEFAULT '{}'::jsonb,
  "createdAt" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "transactions_userId_idx" ON "transactions" ("userId");
CREATE INDEX IF NOT EXISTS "transactions_type_idx" ON "transactions" ("type");
CREATE INDEX IF NOT EXISTS "transactions_reference_idx" ON "transactions" ("reference");
