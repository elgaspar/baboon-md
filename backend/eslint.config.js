import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.node,
        },
        extends: [js.configs.recommended, prettier],
        // rules: {
        //     'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        // },
    },
]);
