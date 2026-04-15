import fs from "node:fs";
import path from "node:path";

export function pathExists(root: string, rel: string): boolean {
  return fs.existsSync(path.join(root, rel));
}

export function requiredPathsPresent(root: string, relPaths: string[]) {
  return relPaths.filter((rel) => !pathExists(root, rel));
}
