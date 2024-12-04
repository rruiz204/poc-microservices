import { Router } from "express";
import Controller from "./controller";

const ApiRouter = Router();

ApiRouter.get("/", Controller.index);

export default ApiRouter;