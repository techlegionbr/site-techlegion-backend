import Joi, { type ValidationResult } from "@hapi/joi"

import { type IFormRegister } from "../types"

const FormRegisterSchema = (data: IFormRegister): ValidationResult => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    code: Joi.string().required().min(36).max(36),
    password: Joi.string()
      .required()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/),
  })

  return schema.validate(data)
}

export { FormRegisterSchema }
