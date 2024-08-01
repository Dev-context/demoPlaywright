import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    [
      "allure-playwright",
      {
        outputFile: "my-allure-results",
        includeProjectInTestName: true,
        open: "always",
      },
    ],
  ],
  use: {
    baseURL: "https://demo.automationtesting.in",
    trace: "on",
    screenshot: "on",
    video: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
