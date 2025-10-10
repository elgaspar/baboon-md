from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="BaboonMD API", version="1.0.0")

@app.get("/")
def root():
    return {"message": "BaboonMD API is running"}


@app.get("/ping")
def ping():
    return {"pong": True}


@app.post("/convert")
def convert():
    # TODO implement
    return {"status": "ok"}