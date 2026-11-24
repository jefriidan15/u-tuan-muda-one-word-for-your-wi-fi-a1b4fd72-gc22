import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// Deterministic: one fixed word, no clock, no randomness, no env reads.
// "moody" — the Wi-Fi works when it feels like it, and sulks when it doesn't.
// One word, five letters, no trailing newline in the output file.
const WORD = 'moody';

const outPath = process.argv[2] || '/output/entry.txt';
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, 'utf8');
