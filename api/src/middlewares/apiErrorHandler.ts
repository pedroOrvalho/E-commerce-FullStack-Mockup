import { Request, Response } from "express";

import ApiError from "../helpers/apiError";

export default function (req: Request, res: Response, error: ApiError) {
  res.status(error.statusCode).json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  });
}
