import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors";

const verifyAuthPosition = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing Authentication");
  }

  const tokenSplit = token.split(" ")[1];

  jwt.verify(
    tokenSplit,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (decoded.position !== "user") {
        next();
      }
      if (error) {
        throw new AppError(401, "Missing position permissions!");
      }

      throw new AppError(401, "Missing position permissions!");
    }
  );
  next();
};
export default verifyAuthPosition;