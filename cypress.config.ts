import {defineConfig} from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://www.isbank.com.tr', // baseURL which is gonna use in test
        setupNodeEvents(on, config) {
        },
        specPattern: 'app-test/ui-tests/**/*.cy.ts', // Test files path
        supportFile: false,
    },
    defaultCommandTimeout: 10000,
});
