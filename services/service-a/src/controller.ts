import type { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  res.status(200).json({ path: "index" })
};

const Controller = Object.freeze({ index });
export default Controller;