import { v4 } from "uuid";

const {
  EXPRESS_HOST,
  EXPRESS_PORT,
} = process.env;

const UUID = v4();

const EXPRESS_HOST_PARSED = `http://${EXPRESS_HOST}:${EXPRESS_PORT}`;

const EXPRESS_PORT_PARSED = parseInt(EXPRESS_PORT!, 10);

const CHECKER_NAME = `${UUID}-health-check`;

const CHECKER_HTTP = `http://${EXPRESS_HOST}:${EXPRESS_PORT}/health`;


export const ServiceConfig = {
  id: UUID,
  name: "express-service-b",
  host: EXPRESS_HOST_PARSED,
  port: EXPRESS_PORT_PARSED,
  checker: {
    name: CHECKER_NAME,
    http: CHECKER_HTTP,
  },
};