// @ts-check
import {test, expect} from '@playwright/test';
import fs from "fs";
import path from "path";

test.use({ viewport: { width: 375, height: 667 } });

test('shows warning message on small screens instead of editor', async ({page}) => {
    await page.goto('/');

    await page.getByRole('link', {name: 'Try it now'}).click();

    // const editor = page.locator('.w-md-editor-text-input');

    //TODO

    // const markdown = fs.readFileSync(
    //     path.resolve(__dirname, '../assets/sample.md')
    // );
    // await editor.fill(markdown.toString());
    //
    // await page.emulateMedia({ media: 'print' });
    // await expect(page).toHaveScreenshot('print-preview.png', {maxDiffPixelRatio: 0, maxDiffPixels: 0, threshold: 0})
});
