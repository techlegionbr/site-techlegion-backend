import Joi, { type ValidationResult } from "@hapi/joi"

import { type IAdminSchemaValidation } from "../types/Admin"

const AdminSchema = (data: IAdminSchemaValidation): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/),
  })
  return schema.validate(data)
}

export { AdminSchema }
