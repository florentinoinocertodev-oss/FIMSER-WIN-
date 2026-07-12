-- ============================================================
-- MÓDULO 04 — GAMEPLAY [COMPLETO]
-- Sessões de partida, log de ações e cashouts.
-- O estado runtime é autoritativo no servidor e persistido aqui.
-- ============================================================

CREATE TABLE IF NOT EXISTS "matches" (
  "id" text PRIMARY KEY NOT NULL,
  "userId" text NOT NULL,
  "clubId" text NOT NULL,
  "competitionId" text NOT NULL,
  "stake" bigint NOT NULL,              -- stake pago (cêntimos AOA)
  "houseFee" bigint NOT NULL,           -- fee retido
  "playableBalance" bigint NOT NULL,    -- saldo jogável inicial
  "currentValue" bigint NOT NULL DEFAULT 0, -- valor atual (cashout potencial)
  "score" integer NOT NULL DEFAULT 0,
  "momentum" real NOT NULL DEFAULT 0,   -- -100..100
  "risk" real NOT NULL DEFAULT 0,       -- 0..100
  "stamina" real NOT NULL DEFAULT 100,
  "aiPressure" real NOT NULL DEFAULT 0, -- 0..100
  "multiplier" real NOT NULL DEFAULT 1.0,
  "minute" integer NOT NULL DEFAULT 0,
  "phase" text NOT NULL DEFAULT 'first_half', -- first_half | half_time | second_half | extra_time | full_time
  "state" text NOT NULL DEFAULT 'active',     -- active | collapsed | cashed_out | finished | abandoned
  "result" text,                        -- win | loss | draw
  "seed" text,                          -- para replay/event DNA
  "narrative" text,                     -- história emergente dominante
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "endedAt" timestamp
);

CREATE INDEX IF NOT EXISTS "matches_userId_idx" ON "matches" ("userId");
CREATE INDEX IF NOT EXISTS "matches_state_idx" ON "matches" ("state");

CREATE TABLE IF NOT EXISTS "match_actions" (
  "id" text PRIMARY KEY NOT NULL,
  "matchId" text NOT NULL,
  "userId" text NOT NULL,
  "tick" integer NOT NULL,
  "minute" integer NOT NULL,
  "actor" text NOT NULL DEFAULT 'player', -- player | ai | system
  "type" text NOT NULL,        -- GOAL | ASSIST | SHOT_ON_TARGET | BALL_LOST | RED_CARD | OWN_GOAL | ...
  "points" integer NOT NULL DEFAULT 0,
  "valueDelta" bigint NOT NULL DEFAULT 0,
  "momentumDelta" real NOT NULL DEFAULT 0,
  "riskDelta" real NOT NULL DEFAULT 0,
  "combo" integer NOT NULL DEFAULT 0,
  "commentary" text,
  "createdAt" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "match_actions_matchId_idx" ON "match_actions" ("matchId");

CREATE TABLE IF NOT EXISTS "cashouts" (
  "id" text PRIMARY KEY NOT NULL,
  "matchId" text NOT NULL,
  "userId" text NOT NULL,
  "type" text NOT NULL,        -- partial | full | early | forced
  "amount" bigint NOT NULL,
  "minute" integer NOT NULL,
  "multiplier" real NOT NULL DEFAULT 1.0,
  "createdAt" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "cashouts_matchId_idx" ON "cashouts" ("matchId");
CREATE INDEX IF NOT EXISTS "cashouts_userId_idx" ON "cashouts" ("userId");
