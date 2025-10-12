from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from playwright.async_api import async_playwright
import tempfile, os
from starlette.background import BackgroundTask
from fastapi import Request

load_dotenv()
app = FastAPI(title="BaboonMD API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_CORS_URL")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "BaboonMD API is running"}


@app.get("/ping")
async def ping():
    return {"pong": True}


@app.post("/convert")
async def convert(request: Request):
    url = os.getenv("FRONTEND_EDITOR_PAGE_URL")
    data = await request.json()
    markdown = data.get("markdown", "")


    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox"])
        page = await browser.new_page()
        await page.goto(url, wait_until="networkidle")

        await page.wait_for_selector(".w-md-editor-text textarea", timeout=10000)
        await page.fill(".w-md-editor-text textarea", markdown)
        await page.wait_for_timeout(500)

        with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp_pdf:
            await page.pdf(path=tmp_pdf.name, format="A4", print_background=True)

        await browser.close()

        task = BackgroundTask(lambda: os.remove(tmp_pdf.name))

        return FileResponse(
            tmp_pdf.name,
            media_type="application/pdf",
            filename="BaboonMD.pdf",
            background=task,
        )