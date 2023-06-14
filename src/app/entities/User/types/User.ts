import { type TPermissions } from "../../../types/Permissions"

export interface IUserSchemaDB {
  name: string
  email: string
  password: string
  inUse: boolean
  code: string
  profile: string
  permissions: TPermissions[]
}

export type IUserSchemaCreation = Omit<
  IUserSchemaDB,
  "code" | "inUse" | "profile" | "permissions"
>
