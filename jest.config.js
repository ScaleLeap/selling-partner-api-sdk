module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'setup-polly-jest/jest-environment-node',
  coveragePathIgnorePatterns: ['<rootDir>/src/api-models/'],
  setupFilesAfterEnv: ['@scaleleap/jest-polly'],
}
