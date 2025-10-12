// @ts-check
import {test, expect} from '@playwright/test';
import fs from "fs";
import path from "path";

test('renders Markdown print correctly', async ({page}) => {
    await page.goto('/');

    await page.getByRole('link', {name: 'Try it now'}).click();

    const editor = page.locator('.w-md-editor-text-input');

    const markdown = fs.readFileSync(
        path.resolve(__dirname, '../assets/sample.md')
    );
    await editor.fill(markdown.toString());

    await page.emulateMedia({ media: 'print' });
    await expect(page).toHaveScreenshot('print-preview.png', {maxDiffPixelRatio: 0, maxDiffPixels: 0, threshold: 0})
});
