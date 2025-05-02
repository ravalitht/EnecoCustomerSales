import { test as baseTest, Browser, BrowserContext, Page } from '@playwright/test';
import { PageManager } from '../utilities/pageManager';
import {BROWSER} from '../utilities/envConfig'

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

  const browserType = BROWSER || 'chromium'; // default to chromium
  console.log(`Launching ${browserType} browser...`);

  switch (browserType) {
    case 'chromium':
      browser = await playwright.chromium.launch({
        headless: false,
        args: ['--start-maximized'],
      });
      break;

    case 'firefox':
      browser = await playwright.firefox.launch({
        headless: false,
      });
      break;

    case 'webkit':
      browser = await playwright.webkit.launch({
        headless: false,
      });
      break;

    default:
      throw new Error(`Unsupported browser: ${browserType}`);
  }
});

test.beforeEach(async () => {
  console.log('Creating context and page...');
  context = await browser.newContext();
  page = await context.newPage();
});

test.afterEach(async () => {
  console.log('Closing page and context...');
  await page.close();
  await context.close();
});

test.afterAll(async () => {
  console.log('Closing browser...');
  await browser.close();
});
