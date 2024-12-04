import express from "express";
import ApiRouter from "./src/router";
import ServiceConfig from "./src/configs/service";
import { HealthChecker, RegisterConsul } from "./src/consul";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRouter);
app.get("/health", HealthChecker);

await RegisterConsul();

app.listen(ServiceConfig.port, () => {
  console.log(`Server is listening at http://${ServiceConfig.address}:${ServiceConfig.port}`);
});