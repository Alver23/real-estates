module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/**/interfaces/**/*.ts',
    '!<rootDir>/src/reportWebVitals.ts',
    '!<rootDir>/src/index.tsx',
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@alversoft/(.*)': '<rootDir>/src/$1',
  },
  notify: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: 'reports',
        filename: 'jest.html',
        expand: true,
      },
    ],
  ],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__tests__/**/*.ts', '**/__tests__/**/*.tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
