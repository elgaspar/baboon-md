FROM python:3.14-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install playwright && playwright install --with-deps chromium

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]