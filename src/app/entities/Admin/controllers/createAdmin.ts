import bcrypt from "bcryptjs"
import { type Request, type Response } from "express"

import generateID from "../../../../utils/generateID"
import Admin from "../../../entities/Admin/schemas/database/Admin"
import { AdminCreationSchema } from "../../../entities/Admin/schemas/validation/creation"
import {
  type IAdminSchemaDB,
  type IAdminSchemaCreation,
} from "../../../entities/Admin/types/Admin"

const createAdmin = async (req: Request, res: Response): Promise<void> => {
  const { body: admin }: { body: IAdminSchemaCreation } = req

  const { error } = AdminCreationSchema(admin)

  if (error !== undefined) {
    res.status(401).send({
      message: error.message,
    })
    return
  }

  const passwordGenerated = generateID(10)

  const newAdmin: IAdminSchemaDB = {
    ...admin,
    password: passwordGenerated,
  }

  newAdmin.password = bcrypt.hashSync(passwordGenerated, 10)

  try {
    await new Admin(newAdmin).save()
    res.status(200).send({
      message: "Administrador criado com sucesso!",
      admin: {
        password: passwordGenerated,
      },
    })
  } catch (error) {
    console.log(`Erro ao criar administrador -----> ${JSON.stringify(error)}`)
    res.status(500).send({
      message:
        "Ocorreu um erro interno no servidor ao criar um novo administrador! Entre em contato com o desenvolvedor responsavel",
    })
  }
}

export default createAdmin
