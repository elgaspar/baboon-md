// @ts-check
import {test, expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {fromPath} from 'pdf2pic';

test('export PDF', async ({page}, testInfo) => {
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

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Export PDF'}).click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('BaboonMD.pdf');

    const downloadedPdfPath = await download.path()
    const tmpDirectory = testInfo.outputPath();

    const convert = fromPath(downloadedPdfPath, {
        density: 150,
        format: 'png',
        saveFilename: 'downloaded-pdf-screenshot',
        savePath: tmpDirectory,
        preserveAspectRatio: true
    });
    await convert(1);

    const downloadedPdfImagePath = path.join(tmpDirectory, 'downloaded-pdf-screenshot.1.png');
    const image = fs.readFileSync(downloadedPdfImagePath);
    expect(image).toMatchSnapshot('export-preview.png', {maxDiffPixelRatio: 0, maxDiffPixels: 0, threshold: 0});
});