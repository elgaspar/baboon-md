FROM node:24-bookworm-slim AS base

WORKDIR /app
COPY package*.json ./


FROM base AS dev

RUN npm ci
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]


FROM base AS prod

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm ci
COPY . .
RUN npm run build

RUN npm install -g serve

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]