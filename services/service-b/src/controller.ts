import type { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  res.status(200).json({ path: "index", service: "B" });
};

export const Controller = Object.freeze({ index });