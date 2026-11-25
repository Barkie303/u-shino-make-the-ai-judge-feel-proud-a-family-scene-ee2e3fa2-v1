// A proud family moment: one small burnt-pancake memory, written out to /output/entry.txt.
import { join } from "node:path";

const SCENE =
  "Dad framed my first burnt pancake and hung it in the hallway. 'First pancake, first try,' he tells every guest. It is still the best thing I ever made.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(join(outDir, "entry.txt"), SCENE);
