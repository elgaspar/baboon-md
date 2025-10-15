import express from 'express';
import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '2mb' }));

dotenv.config();
const FRONTEND_PREVIEW_URL = process.env.FRONTEND_PREVIEW_URL;

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

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();
        await page.goto(FRONTEND_PREVIEW_URL, { waitUntil: 'networkidle0' });

        await page.evaluate((md) => {
            window.__MARKDOWN__ = md;
            window.dispatchEvent(new Event('markdownUpdate'));
        }, markdown);

        await page.waitForSelector('.w-md-editor-preview', { timeout: 5000 });
        await new Promise((resolve) => setTimeout(resolve, 500));

        await page.waitForFunction(() => {
            const imgs = Array.from(document.images);
            return imgs.every((img) => img.complete);
        });

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

app.listen(8000, () => console.log(`✅ Server running on http://localhost:8000`));
