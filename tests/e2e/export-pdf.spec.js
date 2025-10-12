// @ts-check
import {test, expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {fromPath} from 'pdf2pic';
import {execSync} from "child_process";
import {fileTypeFromFile} from "file-type";

test('export Markdown to PDF', async ({page}, testInfo) => {
    await page.goto('/');

    await page.getByRole('link', {name: 'Try it now'}).click();

    const editor = page.locator('.w-md-editor-text-input');

    const markdown = fs.readFileSync(
        path.resolve(__dirname, '../assets/sample.md')
    );
    await editor.fill(markdown.toString());

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Export PDF'}).click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('BaboonMD.pdf');

    const downloadedPdfPath = await download.path()
    const tmpDirectory = testInfo.outputPath();

    //TODO deleteme
    const stablePdfPath = path.join(tmpDirectory, 'downloaded.pdf');
    fs.copyFileSync(downloadedPdfPath, stablePdfPath);
    console.log("Copied to:", stablePdfPath);
    console.log("Size after copy:", fs.statSync(stablePdfPath).size);

    await new Promise(r => setTimeout(r, 500));//TODO deleteme


    // console.log("--- PDF Debug ---");
    // console.log("Exists:", fs.existsSync(downloadedPdfPath));
    // console.log("Size:", fs.statSync(downloadedPdfPath).size);
    // console.log("Readable:", fs.accessSync(downloadedPdfPath, fs.constants.R_OK) === undefined);
    // console.log("Path:", downloadedPdfPath);
    // console.log("--- PDF Debug End ---");

    const buffer = fs.readFileSync(stablePdfPath);
    console.log("PDF first 600 bytes:\n", buffer.subarray(0, 600).toString());


    const type = await fileTypeFromFile(stablePdfPath);
    console.log('FILE TYPE: ');
    console.log(type);
    expect(type?.mime).toBe("application/pdf");

    const convert = fromPath(stablePdfPath, {
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