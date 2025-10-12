// @ts-check
import { test, expect } from "@playwright/test";

test("backend healthcheck is OK", async ({ request }) => {
    const baseUrl = process.env.API_BASE_URL;

    const pingResponse = await request.get(`${baseUrl}/ping`);
    expect(pingResponse.ok()).toBeTruthy();
});
