/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const path = require('path');

module.exports = {
    preset: 'ts-jest',
    verbose: true,
    rootDir: path.resolve(__dirname, './'),
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'vue'],
    transform: {
        '^.+\\.(vue|md)$': '<rootDir>/node_modules/@vue/vue3-jest',
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    },
    transformIgnorePatterns: ['node_modules'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        'k-view-next$': '<rootDir>/components/index.ts',
        'k-view-next/es': '<rootDir>/components',
    },
    testMatch: ['**/*/test/unit/**/*.spec.js'],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    // setupFiles: ['<rootDir>/tests/setup/jest.init.js'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['components/**/*.ts', 'components/**/*.tsx'],
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
};