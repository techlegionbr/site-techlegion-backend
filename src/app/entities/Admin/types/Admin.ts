import { type TPermissions } from "../../../security/permissions/types"

export interface IAdminSchemaDB {
  name: string
  email: string
  password: string
  permissions: TPermissions[]
}

export type IAdminSchemaCreation = Omit<IAdminSchemaDB, "password">
