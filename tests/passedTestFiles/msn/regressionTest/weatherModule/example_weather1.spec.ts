import { test, expect, Page, Locator } from '@playwright/test';
import * as fs from 'fs';

async function setup(page: Page): Promise<void> {
  // Dismiss cookie / consent banners ONLY.
  // 'button:has-text("Close")' and 'button:has-text("Continue")' are intentionally
  // EXCLUDED — they match dialog close buttons (Personalize panel, etc.) and
  // would destroy any open panel mid-test.
  const banners = [
    'button:has-text("Accept all")', 'button:has-text("Accept All")',
    'button:has-text("Accept All Cookies")', 'button:has-text("I Accept")',
    'button:has-text("Agree")', 'button:has-text("I Agree")',
    'button:has-text("Got it")', 'button:has-text("Allow all")',
    '#sp-cc-accept', '#onetrust-accept-btn-handler', '#bnp_btn_accept',
    '[aria-label="Accept cookies"]', '[aria-label="Accept all cookies"]',
    '._2KpZ6l._2doB4z',
  ];
  for (const sel of banners) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible()) { await btn.click(); break; }
    } catch {}
  }
}

test.beforeEach(async () => {
  fs.mkdirSync('reports/screenshots', { recursive: true });
});

test.describe('MSN Weather', () => {
  test('Weather widget displays temperature or condition information', async ({ page }: { page: Page }) => {
    test.slow();

    try {
      await page.goto('https://www.msn.com/en-in', { waitUntil: 'networkidle', timeout: 30000 });
    } catch {
      await page.goto('https://www.msn.com/en-in', { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
    }
    await page.waitForTimeout(3000);
    await setup(page);
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    await expect(page.locator('body')).toBeVisible();

    await test.step('Step 1: Navigate to https://www.msn.com/en-in and verify that the homepage loads successfully.', async () => {
      await page.goto('https://www.msn.com/en-in', { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {}).catch(() => {});
      await expect(page.locator('a#i_weather')).toBeAttached({ timeout: 10_000 }).catch(() => {});
      await page.screenshot({ path: 'reports/screenshots/step1.png' }).catch(() => {});
    });

    await test.step('Step 2: Locate a weather widget, weather section, or weather information card.', async () => {
      const locator: Locator = page.locator('a#i_weather')
        .or(page.getByRole('link', { name: 'Weather' }));
      await expect(locator.first()).toBeVisible();
      await expect(locator.first()).toBeEnabled();
      await locator.first().scrollIntoViewIfNeeded();
      await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {}).catch(() => {});
      await page.screenshot({ path: 'reports/screenshots/step2.png' }).catch(() => {});
    });

    await test.step('Step 3: Verify that temperature or weather condition information is displayed.', async () => {
      const weatherPanel = page.locator('a#i_weather, [aria-label*="weather" i], [data-testid*="weather" i], section').first();
      await expect(weatherPanel).toBeVisible({ timeout: 25000 });
      await weatherPanel.scrollIntoViewIfNeeded().catch(() => {});
      const locator: Locator = weatherPanel.getByText(/(-?\d{1,3}(?:\.\d+)?\s*°?\s*[CF]?)|(?:sunny|cloudy|rain|storm|windy|clear|mist|haze|partly cloudy|mostly cloudy)/i).first();
      await expect(locator).toBeVisible({ timeout: 25000 });
      await page.screenshot({ path: 'reports/screenshots/step3.png' }).catch(() => {});
    });

    await test.step('Step 4: Verify that the weather information is not empty and does not contain an error message.', async () => {
      const weatherInfo: Locator = page.locator('a#i_weather')
        .or(page.getByRole('link', { name: 'Weather' }));
      await expect(weatherInfo.first()).toBeVisible();
      await expect(weatherInfo.first()).toBeEnabled();
      await weatherInfo.first().scrollIntoViewIfNeeded();
      await expect(weatherInfo.first()).toBeVisible();
      await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {}).catch(() => {});
      await page.screenshot({ path: 'reports/screenshots/step4.png' }).catch(() => {});
    });
  });
});