const {
  CONSUL_HOST,
  CONSUL_PORT,
} = process.env;

const CONSUL_ADDRESS = `http://${CONSUL_HOST}:${CONSUL_PORT}`;

const CONSUL_PORT_PARSED = parseInt(CONSUL_PORT!, 10);

export const ConsulConfig = {
  host: CONSUL_HOST,
  port: CONSUL_PORT_PARSED,
  address: CONSUL_ADDRESS,
};