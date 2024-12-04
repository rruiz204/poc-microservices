import { Router } from "express";
import Controller from "./controller";

const ApiRouter = Router();

ApiRouter.get("/", Controller.index);
ApiRouter.get("/config", Controller.config);

export default ApiRouter;