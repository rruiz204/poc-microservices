import type { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  res.status(200).json({ path: "index", service: "express" });
};

const config = async (req: Request, res: Response) => {
  res.status(200).json({
    path: "config",
    consul: `Host: ${process.env.CONSULT_HOST} | Port : ${parseInt(process.env.CONSULT_PORT!, 10)}`
  });
};

const Controller = Object.freeze({ index, config });
export default Controller;