import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 3,
  reporter: [
    ['html', { outputFolder: 'test-results/html-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list'],
    ['junit', { outputFile: 'test-results/junit.xml' }]
  ],

  timeout: 120000,

  expect: {
    timeout: 15000,
  },

  use: {
    trace: "retain-on-failure",
    screenshot: "on",
    video: "retain-on-failure",
    actionTimeout: 30000,
    navigationTimeout: 60000,
    headless: true,
  },

  projects: [
    {
      name: "chromium",
      retries: 0,
      use: {
        browserName: "chromium",
        viewport: null,
        launchOptions: {
          slowMo: 500,
          args: ['--start-maximized',
            '--disable-dev-shm-usage'
          ]
        },
      },
    },
    {
      name: "firefox",
      retries: 0,
      use: {
        browserName: "firefox",
        viewport: null,
      },
    },
    {
      name: "webkit",
      retries: 0,
      use: {
        browserName: "webkit",
        viewport: null,
      },
    },
  ],

  outputDir: "artifacts",
});