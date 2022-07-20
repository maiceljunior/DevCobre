import { Request, Response, NextFunction } from "express";

const verifyAuthManager = (req: Request, res: Response, next: NextFunction) => {
  const position = req.user.position;

  if (position === "ADM") {
    next();
  }
};
export default verifyAuthManager;
