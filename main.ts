// Till Firmware Do Us Part — a robot's wedding vow.
//
// The program writes one sentence to /output/entry.txt: the vow a robot
// speaks at its own wedding. One sentence, under 200 characters, funny
// and heartfelt at the same time.
//
// The vow borrows the shape of the classic wedding promise — "in
// sickness and in health, till death do us part" — and replays it in
// machine terms: low battery and full charge, updates and crashes,
// firmware instead of death. The joke comes from the situation itself
// (a robot marrying), and the tenderness sits underneath it: a promise
// to stay through every bad state, not just the good ones.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you in low battery and in full charge, through every update and every crash, till firmware do us part.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, and a single sentence. Fail loudly if the vow
// ever drifts out of those bounds instead of shipping a bad entry.
if (VOW.length < 1 || VOW.length > 200) {
  throw new Error(`vow is ${VOW.length} characters, must be 1-200`);
}
if (VOW.trim() !== VOW || VOW.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("vow must be exactly one sentence with no spare words");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");

// Read it back and confirm what the judge will see.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== VOW) throw new Error("entry.txt does not match the vow");
console.log(`wrote /output/entry.txt (${written.length} chars): ${written}`);
