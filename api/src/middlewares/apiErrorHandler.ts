import { Request, Response } from "express";

import ApiError from "../helpers/apiError";

export default function (error: ApiError, req: Request, res: Response) {
  return res.status(error.statusCode).json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  });
}
