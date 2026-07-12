-- ============================================================
-- MÓDULO 02 — CLUBS [COMPLETO]
-- Catálogo de clubes (produto) + clubes desbloqueados por utilizador.
-- ============================================================

CREATE TABLE IF NOT EXISTS "clubs" (
  "id" text PRIMARY KEY NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "name" text NOT NULL,
  "tier" text NOT NULL DEFAULT 'basic',   -- basic | premium | elite | legendary
  "attack" integer NOT NULL DEFAULT 50,
  "defense" integer NOT NULL DEFAULT 50,
  "midfield" integer NOT NULL DEFAULT 50,
  "housePressure" real NOT NULL DEFAULT 1.0,   -- multiplicador de pressão da casa
  "rewardMultiplier" real NOT NULL DEFAULT 1.0,-- multiplicador de recompensa
  "difficulty" real NOT NULL DEFAULT 1.0,
  "unlockCost" bigint NOT NULL DEFAULT 0,      -- custo em bónus/saldo
  "primaryColor" text,
  "logoUrl" text,
  "isActive" boolean NOT NULL DEFAULT true,
  "createdAt" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "clubs_tier_idx" ON "clubs" ("tier");

CREATE TABLE IF NOT EXISTS "user_clubs" (
  "id" text PRIMARY KEY NOT NULL,
  "userId" text NOT NULL,
  "clubId" text NOT NULL,
  "level" integer NOT NULL DEFAULT 1,
  "source" text NOT NULL DEFAULT 'default', -- default | purchase | bonus | pack
  "createdAt" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "user_clubs_userId_idx" ON "user_clubs" ("userId");
