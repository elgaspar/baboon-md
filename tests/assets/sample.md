# Line 1
## Line 2
```python
@app.get("/")
async def root():
    return {"message": "BaboonMD API is running"}

@app.get("/ping")
async def ping():
    return {"pong": True}
```
### Some lists
- Item 1
- Item 2
    - Subitem 1
    - Subitem 2

1. First
2. Second