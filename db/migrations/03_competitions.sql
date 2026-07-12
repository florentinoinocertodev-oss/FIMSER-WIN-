-- ============================================================
-- MÓDULO 03 — COMPETITIONS [COMPLETO]
-- Ligas / arenas / tiers com stake mínimo e desbloqueio.
-- ============================================================

CREATE TABLE IF NOT EXISTS "competitions" (
  "id" text PRIMARY KEY NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "name" text NOT NULL,
  "tier" text NOT NULL DEFAULT 'bronze', -- bronze | silver | gold | elite
  "minStake" bigint NOT NULL DEFAULT 50000,   -- cêntimos AOA
  "maxStake" bigint NOT NULL DEFAULT 100000000,
  "rewardMultiplier" real NOT NULL DEFAULT 1.0,
  "houseFeePct" real NOT NULL DEFAULT 0.15,   -- fee base da casa
  "difficulty" real NOT NULL DEFAULT 1.0,
  "unlockLevel" integer NOT NULL DEFAULT 1,
  "energyCost" integer NOT NULL DEFAULT 1,
  "isActive" boolean NOT NULL DEFAULT true,
  "sortOrder" integer NOT NULL DEFAULT 0,
  "createdAt" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "competitions_tier_idx" ON "competitions" ("tier");
