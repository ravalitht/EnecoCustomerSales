// tests/support/hooks.ts
import { test as baseTest, Browser, BrowserContext, Page } from '@playwright/test';
import { PageManager } from '../utilities/pageManager';

type MyFixtures = {
  pageManager: PageManager;
};

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Extend Playwright test with custom fixture
export const test = baseTest.extend<MyFixtures>({
  pageManager: async ({}, use) => {
    const manager = new PageManager(page);
    await use(manager);
  },
});

export const expect = baseTest.expect;

// ----- HOOKS -----

test.beforeAll(async ({ playwright }) => {
  console.log('🚀 [beforeAll] Launching browser...');
  browser = await playwright.chromium.launch({ headless: false });
});

test.beforeEach(async () => {
  console.log('📄 [beforeEach] Creating context and page...');
  context = await browser.newContext();
  page = await context.newPage();
});

test.afterEach(async () => {
  console.log('🧹 [afterEach] Closing page and context...');
  await page.close();
  await context.close();
});

test.afterAll(async () => {
  console.log('🛑 [afterAll] Closing browser...');
  await browser.close();
});
