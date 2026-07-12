# FIMSER WIN — Modelo de Dados

> Base PostgreSQL (Neon). Arquitetura **modular** e preparada para evoluir sem
> reestruturação. Cada módulo é uma migration independente em `db/migrations/`.
> As tabelas de aplicação usam uma coluna `userId text` para _scoping_ por
> utilizador (não há RLS no Neon) e **evitam foreign keys** entre tabelas de app
> para facilitar a evolução do schema — exceto as tabelas do Better Auth, que
> mantêm as suas FKs conforme geradas.

## Organização por módulos (migrations)

| # | Módulo | Ficheiro | Estado | Tabelas |
|---|--------|----------|--------|---------|
| 00 | Auth | `00_auth.sql` | Completo | `user`, `session`, `account`, `verification` |
| 01 | Wallet | `01_wallet.sql` | Completo | `wallets`, `transactions` |
| 02 | Clubs | `02_clubs.sql` | Completo | `clubs`, `user_clubs` |
| 03 | Competitions | `03_competitions.sql` | Completo | `competitions` |
| 04 | Gameplay | `04_gameplay.sql` | Completo | `matches`, `match_actions`, `cashouts` |
| 05 | Economy | `05_economy.sql` | Completo | `house_economy` |
| 06 | Rankings | `06_rankings.sql` | Completo | `player_stats`, `seasons`, `divisions`, `rankings` |
| 07 | Collection | `07_collection.sql` | Stub | `player_cards`, `user_cards`, `packs`, `pack_openings` |
| 08 | Store | `08_store.sql` | Stub | `boosters`, `user_boosters`, `skins`, `user_skins`, `stadiums`, `club_store_items` |
| 09 | Progression | `09_progression.sql` | Stub | `vip_levels`, `user_vip`, `energy`, `loyalty`, `battle_pass`, `user_battle_pass`, `achievements`, `user_achievements` |
| 10 | Marketplace | `10_marketplace.sql` | Stub | `marketplace_listings` |
| 11 | Competitive | `11_competitive.sql` | Stub | `tournaments`, `tournament_entries`, `pvp_matches` |
| 12 | Reputation | `12_reputation.sql` | Stub | `reputation` |
| 13 | Analytics | `13_analytics.sql` | Stub | `telemetry_events`, `event_dna`, `replays`, `analytics_daily` |
| 14 | System | `14_system.sql` | Stub | `notifications` |
| 15 | Admin | `15_admin.sql` | Stub | `admin_users`, `audit_log`, `feature_flags` |

## Diagrama ER (visão geral)

\`\`\`mermaid
erDiagram
    user ||--o{ session : has
    user ||--o{ account : has
    user ||--|| wallets : owns
    user ||--o{ transactions : logs
    user ||--o{ user_clubs : unlocks
    user ||--o{ matches : plays
    user ||--o{ player_stats : has
    user ||--o{ rankings : ranked
    user ||--o{ user_cards : owns
    user ||--o{ user_boosters : owns
    user ||--o{ user_skins : owns
    user ||--|| user_vip : has
    user ||--|| energy : has
    user ||--|| loyalty : has
    user ||--o{ marketplace_listings : sells
    user ||--o{ tournament_entries : enters
    user ||--|| reputation : has
    user ||--o{ notifications : receives

    clubs ||--o{ user_clubs : referenced
    clubs ||--o{ matches : used_in
    competitions ||--o{ matches : hosts

    matches ||--o{ match_actions : generates
    matches ||--o{ cashouts : produces
    matches ||--o{ replays : recorded
    matches ||--o{ event_dna : fingerprinted

    seasons ||--o{ divisions : contains
    divisions ||--o{ rankings : ranks
    seasons ||--o{ battle_pass : offers

    player_cards ||--o{ user_cards : instances
    packs ||--o{ pack_openings : opened
    tournaments ||--o{ tournament_entries : has
\`\`\`

## Fluxo económico das wallets

\`\`\`mermaid
flowchart LR
    Deposit[Depósito Stripe] --> Main[mainBalance]
    Main -->|compra partida| Playable[playableBalance]
    Playable -->|fee 15%| House[house_economy.liquidity]
    Playable -->|gameplay| Reward[rewardBalance]
    Reward -->|cashout| Main
    Main -->|levantamento| Withdraw[Saque]
    Bonus[bonusBalance] -->|promoções| Playable
\`\`\`

Consulta `docs/economy.md` para o modelo económico detalhado e `docs/architecture.md`
para a arquitetura de engines em camadas.
