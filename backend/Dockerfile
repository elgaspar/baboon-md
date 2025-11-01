FROM node:24-bookworm-slim AS base

WORKDIR /app
COPY package*.json ./


FROM base AS dev

RUN npm ci
RUN npx playwright install --with-deps chromium

COPY . .

EXPOSE 8000
CMD ["npx", "nodemon", "server.js"]


FROM base AS prod

RUN npm ci --only=production
RUN npx playwright install --with-deps chromium

ENV NODE_ENV=production
ENV PORT=8000

COPY . .

EXPOSE 8000
CMD ["node", "server.js"]