import { spawnSync } from "node:child_process";

const npmCli = process.env.npm_execpath;
if (!npmCli) {
  throw new Error("npm_execpath is required. Run this check through npm.");
}

const result = spawnSync(process.execPath, [npmCli, "pack", "--dry-run", "--json"], {
  cwd: process.cwd(),
  encoding: "utf8"
});

if (result.status !== 0) {
  throw new Error(result.stderr || result.stdout || "npm pack --dry-run failed");
}

const packageReport = JSON.parse(result.stdout);
const report = Array.isArray(packageReport) ? packageReport[0] : Object.values(packageReport)[0];
const packagedFiles = new Set(report.files.map((file) => file.path.replaceAll("\\", "/")));
const requiredFiles = [
  "dist/index.js",
  "dist/api/index.js",
  "dist/config/index.js",
  "dist/db/index.js",
  "dist/env/index.js",
  "dist/errors/index.js",
  "dist/events/index.js",
  "dist/health/index.js",
  "dist/http/index.js",
  "dist/logger/index.js",
  "dist/modules/index.js",
  "dist/queue/index.js",
  "dist/storage/index.js"
];
const missingFiles = requiredFiles.filter((file) => !packagedFiles.has(file));

if (missingFiles.length > 0) {
  throw new Error(`Published package is missing runtime files: ${missingFiles.join(", ")}`);
}

console.info(
  `Framework package check passed with ${packagedFiles.size} files and all runtime entries.`
);
