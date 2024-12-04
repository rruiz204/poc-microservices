import { v4 } from "uuid";

const UUID = v4();
const HOST = process.env.EXPRESS_HOST!;
const PORT = parseInt(process.env.EXPRESS_PORT!, 10);

const ServiceConfig = {
  id: `express-service-${UUID}`,
  name: "express-service",
  address: HOST,
  port: PORT,
  checker: {
    name: `${UUID}-health-check`,
    http: `http://${HOST}:${PORT}/health`
  },
};

export default ServiceConfig;