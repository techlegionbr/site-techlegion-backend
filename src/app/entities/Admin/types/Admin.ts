import { type TPermissions } from "../../../types/Permissions"

export interface IAdminSchemaDB {
  name: string
  email: string
  password: string
  permissions: TPermissions[]
}

export type IAdminSchemaCreation = Omit<IAdminSchemaDB, "password">
