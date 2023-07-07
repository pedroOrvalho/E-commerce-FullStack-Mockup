import { Request, Response } from "express";

import ApiError from "../helpers/apiError";

export default function (error: ApiError, req: Request, res: Response) {
  res.status(error.statusCode).json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  });
}
