module.exports = {
  globals: {
    NODE_ENV: 'test',
  },
  setupFiles: ['<rootDir>/__tests__/config/index.js'],
  testMatch: [
    '<rootDir>/__tests__/*.js',
    '<rootDir>/__tests__/**/*.js',
    '<rootDir>/__tests__/**/?(*.)+(spec|test).js',
  ],
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/config/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!node_modules/',
    '!src/index.js',
    '!src/**/index.js',
  ],
  moduleFileExtensions: ['js', 'node'],
  cacheDirectory: '.jest/cache',
  watchPlugins: [
    ['jest-watch-toggle-config', { setting: 'verbose' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
  ],
};
