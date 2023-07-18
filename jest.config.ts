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
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  }
};
export default config;
