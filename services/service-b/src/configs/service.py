import os

class ServiceConfig:
  host: str = os.getenv("FASTAPI_HOST", "localhost")
  port: int = int(os.getenv("FASTAPI_PORT", 8000))