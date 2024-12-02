import { Router } from "express";
import Controller from "./Controller";

const ApiRouter = Router();

ApiRouter.get("/", Controller.index);

export default ApiRouter;