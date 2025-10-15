FROM node:24-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

RUN apt-get update && \
    apt-get install -y --no-install-recommends chromium && \
    rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN npx playwright install --with-deps chromium

COPY . .

EXPOSE 8000
CMD ["npx", "nodemon", "server.js"]
