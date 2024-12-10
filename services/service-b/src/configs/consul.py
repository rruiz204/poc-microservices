import os

class ConsulConfig:
  host: str = os.getenv("CONSULT_HOST", "localhost")
  port: int = int(os.getenv("CONSULT_PORT", 8500))