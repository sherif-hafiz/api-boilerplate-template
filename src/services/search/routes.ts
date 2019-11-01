import { Request, Response } from "express";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world!");
    }
  },
  {
    path: "/query",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello queryworld!");
    }
  }
];