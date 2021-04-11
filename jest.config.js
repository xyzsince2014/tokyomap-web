module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  testMatch: ["<rootDir>/src/tests/**/*.spec.(ts|tsx)"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/src/tests/coverage",
};