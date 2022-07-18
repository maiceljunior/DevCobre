import { Request, Response, NextFunction } from "express";
import { IClientRequest } from "../interfaces/client/";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const createClientSchema: SchemaOf<IClientRequest> = yup.object().shape({
  document: yup
    .string()
    .required()
    .matches(/^[0-9]*$/, "Please enter numbers only, no spaces or characters!")
    .min(11, "Document needs at least 11 digits!")
    .max(14, "Document needs 14 digits maximum!"),

  name: yup
    .string()
    .required()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
      "Please enter letters only!"
    ),
  type: yup
    .string()
    .required()
    .min(6, "Must be 'Físico' or 'Jurídico'!")
    .max(8, "Must be 'Físico' or 'Jurídico'!"),
});

export const validateCreateClient =
  (schema: SchemaOf<IClientRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,

          stripUnknown: true,
        });
        req.newClient = validatedData;

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
