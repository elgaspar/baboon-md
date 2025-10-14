// @ts-check
import { test, expect } from "@playwright/test";

test("backend healthcheck is OK", async ({ request }) => {
    const baseUrl = "http://localhost:8000";

    const pingResponse = await request.get(`${baseUrl}/health`);

    expect(pingResponse.status()).toBe(200);
});



import fs from "fs";
import path from "path";
import {fileTypeFromFile} from "file-type";

//TODO: remove?
test("POST /convert returns a valid PDF", async ({ request }, testInfo) => {
    const baseUrl = "http://localhost:8000";

    const markdown = "# Hello hello\n\nThis is a test PDF.";

    const response = await request.post(`${baseUrl}/convert`, {
        headers: { "Content-Type": "application/json" },
        data: { markdown },
    });

    expect(response.status()).toBe(200);

    const contentType = response.headers()["content-type"];
    expect(contentType).toBe("application/pdf");

    const buffer = await response.body();

    const signature = buffer.slice(0, 5).toString("utf-8");
    expect(signature).toBe("%PDF-");

    const outputPath = path.join(testInfo.outputPath(), "tmp-test.pdf");
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Saved test PDF: ${outputPath} (${buffer.length} bytes)`);

    const type = await fileTypeFromFile(outputPath);
    expect(type?.mime).toBe("application/pdf");

    expect(buffer.length).toBeGreaterThan(1000);
});
