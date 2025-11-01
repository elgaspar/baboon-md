// @ts-check
import baseConfig from './playwright.config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  ...baseConfig,
  webServer: {
    ...baseConfig.webServer,
    command: 'docker compose -f ../docker-compose.prod.yml --env-file ../.env.prod up',
    url: 'http://localhost:80',
  },
  use: {
    ...baseConfig.use,
    baseURL: 'http://localhost',
  },
});