// @ts-check
import { test, expect } from "@playwright/test";

test("backend healthcheck is OK", async ({ request }) => {
    const baseUrl = "http://localhost:8000";

    const pingResponse = await request.get(`${baseUrl}/health`);

    expect(pingResponse.status()).toBe(200);
});
