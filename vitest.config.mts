import { defineConfig } from 'vitest/config';

export default defineConfig({
  // The suite is tests/. The repository root also holds the Claude Code hook's node:test file
  // (.claude/hooks) and the contract's submodule (conventions/, which carries one too): neither is
  // vitest's, and the job «Repository tooling» runs the hook's tests with node --test.
  test: { environment: 'node', globals: false, testTimeout: 20_000, include: ['tests/**/*.test.ts'] },
});
