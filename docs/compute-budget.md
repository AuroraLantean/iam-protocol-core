# Compute Budget

## IAM_Anchor Program

| Instruction Name | CU consumed | CU limit | Headroom |
| :----: | :-------: | :-----: | :-----: |
| MintAnchor | 58539 | 200000 | 142707 |
| MintAnchor | 46539 | 200000 | 154707 |
| update_anchor | 6778 | 200000 | 194268 |

## IAM_Registry Program

| Instruction Name | CU consumed | CU limit | Headroom |
| :----: | :-------: | :-----: | :-----: |
| InitializeProtocol | 6796 | 200000 | 193702 |
| RegisterValidator | 14466 | 200000 | 186121 |
| RegisterValidator | 15966 | 200000 | 184621 |
| RegisterValidator | 18966 | 200000 | 181621 |
| ComputeTrustScore | 3449 | 200000 | 196620 |
| ComputeTrustScore | 5928 | 200000 | 194141 |
| UnstakeValidator | 8873 | 200000 | 191539 |

## IAM_Verifier Program

| Instruction Name | CU consumed | CU limit | Headroom |
| :----: | :-------: | :-----: | :-----: |
| CreateChallenge | 7523 | 200000 | 192993 |
| CreateChallenge | 10523 | 200000 | 189993 |
| CreateChallenge | 13523 | 200000 | 186993 |
| VerifyProof | 109097 | 200000 | 90903 |
| VerifyProof | 112103 | 200000 | 88793 |
| VerifyProof | 113603 | 200000 | 87293 |
| closeChallenge | ? | 200000 | ? |
| closeVerificationResult | ? | 200000 | ? |

Max 200000 compute units per instruction
The logger, solana-program-log, itself consumes about 286 CU for string together with u64.

## Install Logger

```bash
cargo add solana-program-log  --package your-program-name
```

Run Anchor test, open the log file at `.anchor/program-logs/<programID>.<programName>.log`

Reference: <https://crates.io/crates/solana-program-log>
