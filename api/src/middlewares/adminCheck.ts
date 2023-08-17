import { Response, Request, NextFunction } from "express";

import { ForbiddenError } from "../helpers/apiError";
import { UserDocument } from "../models/Users";

const adminCheck = (req: Request, res: Response, next: NextFunction) => {
  const userData = req.user as UserDocument;
  const userRole = userData.role;

  if (userRole === "admin") {
    next();
  } else {
    next(
      new ForbiddenError(
        "Access not allowed, please review access permissions for this account."
      )
    );
  }
};

export default adminCheck;
