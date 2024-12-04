import ServiceConfig from "../configs/service";
import ConsulInstance from "./instance";

const RegisterConsul = async () => {
  await ConsulInstance.agent.service.register({
    id: ServiceConfig.id,
    name: ServiceConfig.name,
    address: ServiceConfig.address,
    port: ServiceConfig.port,
    check: {
      name: ServiceConfig.checker.name,
      http: ServiceConfig.checker.http,
      interval: "10s",
      timeout: "5s"
    }
  });
};

export default RegisterConsul;