import { test } from "node:test";
import { TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import type { Keypair } from "@solana/web3.js";
import { expect } from "chai";
import {
  BASE_TRUST_INCREMENT,
  CHALLENGE_EXPIRY,
  decodeProtocolConfigDev,
  type IdentityStateAcctWeb3js,
  MAX_TRUST_SCORE,
  MIN_STAKE,
  type Pdas,
  protocolConfigBump,
  protocolConfigPda,
  registryAddr,
  VERIFICATION_FEE,
} from "./encodeDecode.ts";
import {
  acctEqual,
  acctIsNull,
  adminKp,
  getJsTime,
  initializeProtocol,
  readAcct,
  setTime,
} from "./litesvm-utils.ts";

/*
Build the Solana programs first:
$ anchor build
Then Install NodeJs v25.9.0(or above v22.18.0) to run this TypeScript Natively: node ./file_path/this_file.ts
Or use Bun: bun test ./file_path/this_file.ts
*/

let signerKp: Keypair;
let _pdas: Pdas;
const _tokenProgram = TOKEN_2022_PROGRAM_ID;
let _rawAccData: Uint8Array<ArrayBufferLike> | undefined;
let _identity: IdentityStateAcctWeb3js;
const tInit = getJsTime();
let _t0: bigint;

setTime(tInit);
//Follow z-e2e.ts tests
test("initializeProtocol()", async () => {
  console.log("\n----------------== initializeProtocol()");
  signerKp = adminKp;

  acctIsNull(protocolConfigPda);
  initializeProtocol(
    signerKp,
    protocolConfigPda,
    MIN_STAKE,
    CHALLENGE_EXPIRY,
    MAX_TRUST_SCORE,
    BASE_TRUST_INCREMENT,
    VERIFICATION_FEE,
  );
  const rawAccountData = readAcct(protocolConfigPda, registryAddr);
  const decoded = decodeProtocolConfigDev(rawAccountData);
  acctEqual(decoded.admin, signerKp.publicKey);
  expect(decoded.min_stake).eq(MIN_STAKE);
  expect(decoded.challenge_expiry).eq(CHALLENGE_EXPIRY);
  expect(decoded.max_trust_score).eq(MAX_TRUST_SCORE);
  expect(decoded.base_trust_increment).eq(BASE_TRUST_INCREMENT);
  expect(decoded.bump).eq(protocolConfigBump);
  expect(decoded.verification_fee).eq(VERIFICATION_FEE);
});

test("update_protocol_config() with verification fee", async () => {
  console.log(
    "\n----------------== update_protocol_config() with verification fee",
  );
  signerKp = adminKp;
});
test("withdraw_treasury()", async () => {
  console.log("\n----------------== withdraw_treasury()");
  signerKp = adminKp;
});
test("migrate_admin()", async () => {
  console.log("\n----------------== migrate_admin()");
  signerKp = adminKp;
});
