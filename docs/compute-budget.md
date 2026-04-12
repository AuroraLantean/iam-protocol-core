# Compute Budget

Measured via `sol_log_compute_units()` on localnet with `anchor test`. Default limit is 200,000 CU per instruction. Ranges reflect variance across multiple test runs.

## iam-anchor

| Instruction | CU Consumed | Headroom |
|-------------|-------------|----------|
| mint_anchor | 46,539 - 58,539 | ~142K - 154K |
| update_anchor | 6,778 | ~193K |

## iam-registry

| Instruction | CU Consumed | Headroom |
|-------------|-------------|----------|
| initialize_protocol | 6,796 | ~193K |
| register_validator | 14,466 - 18,966 | ~181K - 186K |
| compute_trust_score | 3,449 - 5,928 | ~194K - 197K |
| unstake_validator | 8,873 | ~191K |

## iam-verifier

| Instruction | CU Consumed | Headroom |
|-------------|-------------|----------|
| create_challenge | 7,523 - 13,523 | ~187K - 193K |
| verify_proof | 109,097 - 113,603 | ~87K - 91K |
| close_challenge | Not measured | — |
| close_verification_result | Not measured | — |

## Batched Transaction Budget

The wallet-connected verification batches multiple instructions into a single transaction with a 250,000 CU budget request.

**Re-verification** (create_challenge + verify_proof + update_anchor):
~124K - 134K CU consumed, ~116K - 126K headroom.

**First verification** (create_challenge + verify_proof + mint_anchor):
~163K - 186K CU consumed, ~64K - 87K headroom.

First verification is the tighter path due to mint_anchor's Token-2022 account creation. Both paths fit within the 250K budget with margin.
