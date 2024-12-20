import express from "express";
import { ApiRouter } from "./src/router";
import { Bootstrap } from "./src/bootstrap";

import { HealthChecker } from "@consul/health";
import { ServiceConfig } from "@config/service";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRouter);
app.use("/health", HealthChecker);

app.listen(ServiceConfig.port, () => {
  const url = `http://${ServiceConfig.address}:${ServiceConfig.port}`;
  console.log(`Server is listening at ${url}`);
});

await Bootstrap();