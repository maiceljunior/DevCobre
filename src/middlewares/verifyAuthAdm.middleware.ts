import { Request, Response, NextFunction } from "express";

const verifyAuthAdm = (req: Request, res: Response, next: NextFunction) => {
  const position = req.user.position;

  if (position === "ADM") {
    next();
  }
};
export default verifyAuthAdm;
