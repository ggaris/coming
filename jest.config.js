module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  testRegex: '^.+\\.test\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    ".(css|scss|sass)$": "identity-obj-proxy"
  }
}