import { type TPermissions } from "../../types/Permissions"

export interface IAdminModel {
  name: string
  email: string
  password: string
  permissions: TPermissions[]
}

export type IAdminSchemaValidation = Omit<IAdminModel, "permissions">
