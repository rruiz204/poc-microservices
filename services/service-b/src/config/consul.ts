const {
  CONSUL_HOST = "consul",
  CONSUL_PORT = 8500,
} = process.env;


const CONSUL_HOST_PARSED = `http://${CONSUL_HOST}:${CONSUL_PORT}`;

const CONSUL_PORT_PARSED = typeof(CONSUL_PORT) == "number" ? CONSUL_PORT : parseInt(CONSUL_PORT, 10);


const ConsulConfig = {
  host: CONSUL_HOST_PARSED,
  port: CONSUL_PORT_PARSED
};

export default ConsulConfig;