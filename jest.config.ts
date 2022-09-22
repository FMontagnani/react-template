import { Config } from 'jest';
import { defaults } from 'jest-config';
import type { JestConfigWithTsJest } from 'ts-jest';


const config: Config & JestConfigWithTsJest = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    '\\.[jt]sx?$': 'ts-jest'
  },
  setupFilesAfterEnv : ['<rootDir>/setupTests.ts']
};

export default config;