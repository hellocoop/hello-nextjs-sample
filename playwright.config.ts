import { defineConfig, devices } from '@playwright/test';
const ISSUER = 'http://127.0.0.1:3333'

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1, // mockin is stateful
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: [
    {
      command: 'npx @hellocoop/mockin@latest',
      port: 3333,
    },
    {
      command: `HELLO_WALLET=${ISSUER} npm run dev`,
      port: 3000,
    },
  ],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    { // Safari drops the cookie when running `npm run build && npm run start` but not `npm run dev`
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
