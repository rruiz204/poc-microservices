import express from "express";

/* import Consul from "consul";
import ConsulConfig from "./src/configs/consul"; */

import ApiRouter from "./src/router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRouter);

/* const consul = new Consul({
  host: ConsulConfig.host,
  port: ConsulConfig.port,
  secure: false,
});

await consul.agent.service.register({
  id: "express-service",
  name: "express-service",
  address: "127.0.0.1",
  port: 3000,
}); */

app.listen(3000, () => {
  console.log(`Server is listening at http://localhost:3000`);
});