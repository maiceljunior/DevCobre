import { Request, Response } from "express";
import deleteEmployeeInfoService from "../../services/employee/deleteEmployeeInfo.service";

const deleteEmployeeInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { employeeId } = req.params;

  await deleteEmployeeInfoService(id, employeeId);

  return res.status(200).json({ message: "User Info delete with success!" });
};

export default deleteEmployeeInfoController;
