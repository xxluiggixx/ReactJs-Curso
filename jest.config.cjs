module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
}