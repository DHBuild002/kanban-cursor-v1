module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A map from regular expressions to module names that allow to stub out resources
  // with a single module
  moduleNameMapper: {
    '\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^react-router-dom$': '<rootDir>/__mocks__/react-router-dom.js',
  },

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};