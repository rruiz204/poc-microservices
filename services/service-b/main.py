from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def testing():
  return {"message": "hello world from fastapi"}