import { Before, After, setWorldConstructor, World, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext, devices } from 'playwright';

let browser: Browser;

class CustomWorld extends World {
  page: Page;
  context: BrowserContext;
  URL: string = 'https://bootcampqa.com';

  constructor(options: any) {
    super(options);
    this.page = options.page;
    this.context = options.context;
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(20000);

Before(async function() {
  // Launch browser in headless mode
  browser = await chromium.launch({ headless: true });

  // Define viewport size based on the environment variable VIEWPORT
  let device = {};
  if (process.env.VIEWPORT === 'mobile') {
    device = devices['iPhone 12'];
  } else {
    device = devices['Desktop Chrome'];
  }

  // Create context with video recording based on the viewport
  this.context = await browser.newContext({
    ...device,
    recordVideo: {
      dir: `src/videos/${process.env.VIEWPORT}`, // Save videos in separate folders based on VIEWPORT
    }
  });

  // Create a new page in the context
  this.page = await this.context.newPage();
});

After(async function() {
  // Close the page and browser context
  await this.page.close();
  await this.context.close();
  await browser.close();
});


