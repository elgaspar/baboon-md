import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    server: {
        allowedHosts: ['host.docker.internal'],
    },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
});
