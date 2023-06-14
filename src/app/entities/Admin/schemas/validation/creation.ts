import Joi, { type ValidationResult } from "@hapi/joi"

import { type IAdminSchemaCreation } from "../../types/Admin"

const AdminCreationSchema = (data: IAdminSchemaCreation): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().required().min(4).max(100),
    email: Joi.string().required().email().min(10).max(100),
    permissions: Joi.array()
      .required()
      .items(Joi.string())
      .min(2)
      .validate((value: string[]) => {
        console.log(value)
        return false
      }),
  })
  return schema.validate(data)
}

export { AdminCreationSchema }
