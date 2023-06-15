import { type TPermissions } from "../../../security/permissions/types"

export interface IUserSchemaDB {
  name: string
  email: string
  password: string
  inUse: boolean
  code: string
  profile: string
  permissions: TPermissions[]
  createdAt: Date
}

export type IUserSchemaCreation = Omit<
  IUserSchemaDB,
  "code" | "inUse" | "profile" | "permissions" | "createdAt"
>
