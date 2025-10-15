import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { chromium } from 'playwright';

const app = express();
app.use(express.json({ limit: '2mb' }));

dotenv.config();
const FRONTEND_EDITOR_URL = process.env.FRONTEND_EDITOR_URL;

app.use(
    cors({
        origin: process.env.FRONTEND_CORS_URL,
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.post('/convert', async (req, res) => {
    const { markdown = '' } = req.body;

    const browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();
        await page.goto(FRONTEND_EDITOR_URL, { waitUntil: 'networkidle' });
        const editor = page.locator('.w-md-editor-text-input');
        await editor.fill(markdown);
        await page.waitForTimeout(1000);
        await page.waitForFunction(
            () => {
                // eslint-disable-next-line no-undef
                const imgs = Array.from(document.images);
                return imgs.every((img) => img.complete);
            },
            { timeout: 10000 }
        );

        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
        });

        res.set('Content-Type', 'application/pdf')
            .set('Content-Disposition', 'attachment; filename=document.pdf')
            .send(pdf);
    } catch (err) {
        console.error('❌ PDF generation error:', err);
        res.status(500).send('Failed to generate PDF');
    } finally {
        await browser.close();
    }
});

app.listen(8000, () => console.log(`Server running on http://localhost:8000`));
