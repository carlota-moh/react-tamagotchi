import type { Config } from "@jest/types";
// Sync object
const modulesToTransform = [
  "pokedex-promise-v2",
  "p-map",
  "aggregate-error",
  "indent-string",
  "clean-stack",
  "escape-string-regexp",
].join("|");
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
  },
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [`node_modules/(?!${modulesToTransform}/.*)`],
};
export default config;
