module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  collectCoverageFrom: ["src/**/*.{ts.tsx}", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "locv"],
  moduleNameMapper: {
    ".(css|scss|sass)$": "identity-obj-proxy"
  }
}