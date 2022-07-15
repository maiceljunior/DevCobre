import { Request, Response } from "express";
import updateClientService from "../../services/client/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  const document = req.params.document;

  const documentString = document.toString();

  const { name } = req.body;

  await updateClientService(documentString, name);

  return res.status(200).json({ message: "Updated client" });
};

export default updateClientController;
