import { existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const fallbackDir = path.join(outDir, "_next", "static", "chunks", "app", "_not-found");

if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true });
}

mkdirSync(fallbackDir, { recursive: true });

const result = spawnSync("npx", ["next", "build"], {
  cwd: root,
  stdio: "inherit",
  shell: true
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
