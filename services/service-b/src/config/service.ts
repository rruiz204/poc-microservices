import { v4 } from "uuid";

const {
  EXPRESS_HOST = "service-express-b",
  EXPRESS_PORT = 4000,
} = process.env;

const UUID = v4();

const EXPRESS_HOST_PARSED = `http://${EXPRESS_HOST}:${EXPRESS_PORT}`;

const EXPRESS_PORT_PARSED = typeof(EXPRESS_PORT) == "number" ? EXPRESS_PORT : parseInt(EXPRESS_PORT, 10);

const CHECKER_NAME = `${UUID}-health-check`;

const CHECKER_HTTP = `http://${EXPRESS_HOST}:${EXPRESS_PORT}/health`;


const ServiceConfig = {
  id: UUID,
  name: "express-service-b",
  host: EXPRESS_HOST_PARSED,
  port: EXPRESS_PORT_PARSED,
  checker: {
    name: CHECKER_NAME,
    http: CHECKER_HTTP,
  },
};

export default ServiceConfig;