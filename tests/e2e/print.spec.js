// @ts-check
import {test, expect} from '@playwright/test';

test('print', async ({page}) => {
    await page.goto('/');

    await page.getByRole('link', {name: 'Try it now'}).click();

    const editor = page.locator('.w-md-editor-text-input');
    await editor.fill(`# Line 1
## Line 2
\`\`\`python
@app.get("/")
async def root():
    return {"message": "BaboonMD API is running"}


@app.get("/ping")
async def ping():
    return {"pong": True}
\`\`\`

### Some lists
- Item 1
- Item 2
    - Subitem 1
    - Subitem 2

1. First
2. Second
`);

    await page.emulateMedia({ media: 'print' });
    await expect(page).toHaveScreenshot('print-preview.png', {maxDiffPixelRatio: 0, maxDiffPixels: 0, threshold: 0})
});
