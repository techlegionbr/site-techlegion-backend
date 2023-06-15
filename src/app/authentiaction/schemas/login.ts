import Joi, { type ValidationResult } from "@hapi/joi"

import { type IFormLogin } from "../types"

const FormLoginSchema = (data: IFormLogin): ValidationResult => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/),
  })

  return schema.validate(data)
}

export { FormLoginSchema }
