module.exports = {
    testEnvironment: 'node',
    collectCoverageFrom: [
        'services/*/src/**/*.js',
        'shared/**/*.js',
        '!**/node_modules/**'
    ],
    testMatch: [
        '**/tests/**/*.test.js'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html']
};
