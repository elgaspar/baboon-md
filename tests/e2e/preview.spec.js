// @ts-check
import {test, expect} from '@playwright/test';

test('preview', async ({page}) => {
    await page.goto('/');

    await page.getByRole('link', {name: 'Try it now'}).click();

    const editor = page.locator('.w-md-editor-text-input');
    await editor.fill('# Line 1\n## Line 2\n');

    const preview = page.locator('.w-md-editor-preview');
    await expect(preview.locator('h1')).toContainText('Line 1');
    await expect(preview.locator('h2')).toContainText('Line 2');
    const previewHtml = await preview.innerHTML();
    await expect(previewHtml.indexOf('<h1')).toBeLessThan(previewHtml.indexOf('<h2'));
});
