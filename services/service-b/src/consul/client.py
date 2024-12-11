from consulate import Consul
from src.configs import ConsulConfig

client = Consul(host=ConsulConfig.host, port=ConsulConfig.port)