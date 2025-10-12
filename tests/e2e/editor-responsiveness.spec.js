// @ts-check
import {test, expect} from '@playwright/test';

test.describe('responsive behavior', () => {
    test.describe('screen width < 640px', () => {
        test.use({viewport: {width: 639, height: 667}});

        test('shows warning message instead of editor', async ({page}) => {
            await page.goto('/');

            await page.getByRole('link', {name: 'Try it now'}).click();

            await expect(page.locator('.w-md-editor')).toBeHidden();
            await expect(page.locator('.w-md-editor-text-input')).toBeHidden();

            const message = page.getByText(
                'The baboons need more jungle space!' +
                'Switch to a tablet, desktop, or try rotating your phone.',
            );
            await expect(message).toBeVisible();
        });
    })

    test.describe('screen width >= 640px', () => {
        test.use({viewport: {width: 640, height: 667}});

        test('shows editor instead of warning message', async ({page}) => {
            await page.goto('/');

            await page.getByRole('link', {name: 'Try it now'}).click();

            await expect(page.locator('.w-md-editor')).toBeVisible();
            await expect(page.locator('.w-md-editor-text-input')).toBeVisible();

            const message = page.getByText(
                'The baboons need more jungle space!' +
                'Switch to a tablet, desktop, or try rotating your phone.',
            );
            await expect(message).toBeHidden();
        });
    });
});
