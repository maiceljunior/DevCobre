import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const handleError = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      code: error.statusCode,
      message: error.message,
    });
  }
  return res
    .status(500)
    .json({ status: "error", code: 500, message: "Internal server error." });
};

export default handleError;
