import Consul from "consul";
import ConsulConfig from "../configs/consul";

const ConsulInstance = new Consul({
  host: ConsulConfig.host,
  port: ConsulConfig.port,
  secure: false,
});

export default ConsulInstance;