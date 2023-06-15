import jwt from "jsonwebtoken"

import { type TPermissions } from "../../app/security/permissions/types"

interface ICreateTokenJWTEntitieRoleProps {
  isAdmin: boolean
  name: string
  email: string
  permissions: TPermissions[]
}

const createTokenJWTEntitieRole = (
  { email, isAdmin, name, permissions }: ICreateTokenJWTEntitieRoleProps,
  tokenSecret: string | null
): string => {
  if (tokenSecret === null) {
    throw new Error(
      JSON.stringify({
        origin: "createTokenJWTEntitieRole",
        reason: "O valor passado para o tokenSecret é nulo.",
      })
    )
  }
  const token = jwt.sign(
    {
      email,
      isAdmin,
      name,
      permissions,
    },
    tokenSecret
  )

  return token
}

export default createTokenJWTEntitieRole
