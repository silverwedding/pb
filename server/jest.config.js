module.exports = {
  roots: ['<rootDir>/app'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./app/jest.setup.js'],
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
};
