import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Concrete pill-as-treat ritual; flat one-star review voice carrying 3 a.m. revenge.
const review = "One star. He calls the pill a treat. I take it. He smiles. I will remember this at 3 a.m.";

// Last four words must stay the sting; this guard only enforces the gate.
if (review.length < 1 || review.length > 200 || /[\r\n]/.test(review)) {
  throw new Error("review must be one line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const file = join(outDir, "entry.txt");
// Determinism: fixed string, no clock/random/network/input reads; identical bytes every run.
writeFileSync(file, review, "utf8");
chmodSync(file, 0o644);
