from src.configs import ServiceConfig

from .client import client

async def register_service():
  client.agent.service.register(
    name=ServiceConfig.name,
    service_id=ServiceConfig.id,
    address=ServiceConfig.address,
    port=ServiceConfig.port,
    httpcheck=ServiceConfig.health,
    interval="10s")