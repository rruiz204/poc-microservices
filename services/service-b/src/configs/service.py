import os
import uuid

UUID = uuid.uuid4()
PORT = os.getenv("FASTAPI_PORT", 8000)
HOST = os.getenv("FASTAPI_HOST", "localhost")

#checker_name: str = f"{UUID}-health-check"

class ServiceConfig:
  id: str = f"fastapi-service-{UUID}"
  name: str = "fastapi-service"
  address: str = HOST
  port: int = int(PORT)
  health: str = f"http://{HOST}:{PORT}/health"