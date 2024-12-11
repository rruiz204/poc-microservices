from fastapi import FastAPI
from src.router import router
from src.consul import health_checker, register_service
from dotenv import load_dotenv

load_dotenv()

async def lifespan(app: FastAPI):
  print("startup...")

  await register_service()
  print("registered!!!")

  yield
  print("shutdown...")

app = FastAPI(lifespan=lifespan)

app.include_router(router=router)
app.include_router(router=health_checker)