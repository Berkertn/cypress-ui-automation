import {defineConfig} from 'cypress';

export default defineConfig({
    e2e: {
        screenshotOnRunFailure: true,
        video: true,
        screenshotsFolder: 'failure-screenshots',
        videosFolder: 'failure-videos',
        baseUrl: 'https://www.isbank.com.tr', // baseURL which is going to use in test
        setupNodeEvents(on, config) {
        },
        specPattern: 'app-test/ui-tests/**/*.cy.ts', // Test files path
        supportFile: false,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 60000,
        requestTimeout: 5000,
        responseTimeout: 30000,
    },
    defaultCommandTimeout: 10000,
});
