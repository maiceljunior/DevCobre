import { Request, Response, NextFunction } from "express";
import { UserRole } from "../entities/user.entity";
import { AppError } from "../errors";

const verifyAuthUser = (req: Request, res: Response, next: NextFunction) => {
  const position = req.user.position;

  if (position === "user") {
    next();
  } else {
    throw new AppError(401, "Missing permissions!!");
  }
};
export default verifyAuthUser;
