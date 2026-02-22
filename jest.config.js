export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/src/**/*.test.js', '**/src/**/*.test.jsx'],
};