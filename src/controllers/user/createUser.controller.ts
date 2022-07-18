import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const newUser = await createUserService({
    name,
    email,
    password,
  });
  console.log("Aqui");
  return res.status(201).send(instanceToPlain(newUser));
};

export default createUserController;
