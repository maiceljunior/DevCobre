import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const verifyAuthHR = (req: Request, res: Response, next: NextFunction) => {
  const position = req.user.position;

  if (position === "HR") {
    next();
  }
  throw new AppError(401, "Missing permissions!");
};
export default verifyAuthHR;
