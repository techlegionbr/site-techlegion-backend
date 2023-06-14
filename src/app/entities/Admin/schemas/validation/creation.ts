import Joi, { type ValidationResult } from "@hapi/joi"

import { permissionsAdmin } from "../../../../security/permissions/groups"
import { type TPermissions } from "../../../../security/permissions/types"
import { type IAdminSchemaCreation } from "../../types/Admin"

const AdminCreationSchema = (data: IAdminSchemaCreation): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().required().min(4).max(100),
    email: Joi.string().required().email().min(10).max(100),
    permissions: Joi.array()
      .required()
      .items(Joi.string())
      .min(2)
      .custom((permissions: TPermissions[], helpers) => {
        const isValid = permissions.every((permission) =>
          permissionsAdmin.includes(permission)
        )
        if (!isValid) {
          return helpers.error("Permissões inválidas")
        }
        if (Array.from(new Set(permissions)).length !== permissions.length) {
          return helpers.error("Permissões repetidas")
        }
        return permissions
      }, "validação das permissões"),
  })
  return schema.validate(data)
}

export { AdminCreationSchema }
