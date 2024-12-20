const {
  CONSUL_HOST,
  CONSUL_PORT,
} = process.env;

const CONSUL_HOST_PARSED = `http://${CONSUL_HOST}:${CONSUL_PORT}`;

const CONSUL_PORT_PARSED = parseInt(CONSUL_PORT!, 10);


export const ConsulConfig = {
  host: CONSUL_HOST_PARSED,
  port: CONSUL_PORT_PARSED
};

export default ConsulConfig;