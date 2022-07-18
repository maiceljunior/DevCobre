import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IBankRequest } from "../interfaces/bank";

export const createBankSchema: SchemaOf<IBankRequest> = yup.object().shape({
  name: yup
    .string()
    .required("Error")
    .min(1, "The bank name needs at least 1 character!"),

  status: yup.boolean().typeError("Bank status must be a boolean").required(),
});

export const validateCreateBank =
  (schema: SchemaOf<IBankRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,

          stripUnknown: true,
        });
        req.newBank = validatedData;

        next();
      } catch (err: any) {
        return res.status(400).json({
          error: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };
