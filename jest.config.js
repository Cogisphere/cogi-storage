/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  silent: false,
  verbose: false,
  testMatch: ['**/__tests__/**/*.test.ts'],
  detectOpenHandles: true
};