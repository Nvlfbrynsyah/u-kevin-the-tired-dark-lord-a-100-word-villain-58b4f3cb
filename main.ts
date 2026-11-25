// Writes the monologue of the Harrow's Neck toll-keeper to <OUTPUT_DIR>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MONOLOGUE = `Of course. Come in. Mind the salt; the maid died in spring and I never hired another.
I toll the bridge at Harrow's Neck. Years, not coins. One year a crossing. Your father paid.
Not his own. Yours. Nine years, spent smiling up at him. I liked that man. Not a reason to stop.
Now the gate. It opens for debtors, and the ledger is a river, and the river is wide.
Bring someone you love. Just one. Take the long way round; the bridge is out somehow,
and the toll is good this season, and I have a chair.
`;

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, MONOLOGUE, { encoding: "utf8" });

const words = MONOLOGUE.trim().split(/\s+/).length;
const chars = MONOLOGUE.length;
console.log(`wrote ${outPath}`);
console.log(`words: ${words}`);
console.log(`characters: ${chars}`);
