import express from "express";
import puppeteer from "puppeteer";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json({limit: "2mb"}));

dotenv.config();
const FRONTEND_PREVIEW_URL = process.env.FRONTEND_PREVIEW_URL;

app.use(cors({
    origin: process.env.FRONTEND_CORS_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.post("/convert", async (req, res) => {
    try {
        const pdfPath = path.join(__dirname, "foo.pdf");
        res
            .set("Content-Type", "application/pdf")
            .set("Content-Disposition", "attachment; filename=document.pdf")
            .sendFile(pdfPath);
    } catch (err) {
        console.error("❌ Error sending dummy PDF:", err);
        res.status(500).send("Failed to send dummy PDF");
    }
});

app.listen(8000, () =>
    console.log(`✅ Server running on http://localhost:8000`)
);
