import { type Request, type Response, type NextFunction } from "express"

import { type TPermissions } from "../permissions/types"

interface ICheckPermissionsProps {
  req: Request
  res: Response
  next: NextFunction
  permission: TPermissions
}

const checkPermissions = ({
  req,
  res,
  next,
  permission,
}: ICheckPermissionsProps) => {}

export default checkPermissions
