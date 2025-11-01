#!/bin/bash

set -e

if [ ! -f .env.prod ]; then
    echo "❌ Error: .env.prod file not found"
    exit 1
fi

echo "⬇️ Pulling latest changes..."
git pull || { echo "❌ Git pull failed"; exit 1; }

echo "🛑 Stopping containers..."
docker compose -f docker-compose.prod.yml --env-file .env.prod down || { echo "❌ Docker compose down failed"; exit 1; }

echo "🚀 Starting containers..."
docker compose -f docker-compose.prod.yml --env-file .env.prod up -d || { echo "❌ Docker compose up failed"; exit 1; }

echo "✅ Deployment complete"
