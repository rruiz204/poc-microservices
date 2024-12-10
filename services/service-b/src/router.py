from fastapi import APIRouter

router = APIRouter(prefix="/api")

@router.get("/")
async def index():
  return { "path": "index", "service": "fastapi"  }