import { type TPermissions } from "../../types/Permissions"

export interface IUserModel {
  name: string
  email: string
  password: string
  inUse: boolean
  code: string
  profile: string
  permissions: TPermissions[]
}

export type IUserSchemaValidation = Omit<
  IUserModel,
  "code" | "inUse" | "profile" | "permissions"
>
