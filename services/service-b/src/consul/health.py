from fastapi import APIRouter

health_checker = APIRouter()

@health_checker.get("/health")
async def index():
  print("Checking healthy...")
  return "OK"