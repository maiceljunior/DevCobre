import { Request, Response } from "express";
import updateEmployeeInfoService from "../../services/employee/updateEmployeeInfo.service";

const updateEmployeeInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { employeeId } = req.params;
  const data = req.body;

  await updateEmployeeInfoService(id, employeeId, data);

  return res.status(200).json({ message: "User updated with success" });
};

export default updateEmployeeInfoController;
