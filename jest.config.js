module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['<rootDir>/src/api-models/'],
  setupFilesAfterEnv: ['@scaleleap/jest-polly'],
}
