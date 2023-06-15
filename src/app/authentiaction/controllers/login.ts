import bcrypt from "bcryptjs"
import { type Request, type Response } from "express"

import createTokenJWTEntitieRole from "../../../functions/entities/createTokenJWTEntitieRole"
import fetchAdminOurUserWithEmail from "../../../functions/entities/database/fetchAdminOurUserWithEmail"
import { FormLoginSchema } from "../schemas/login"
import { type IFormLogin } from "../types"

const loginController = async (req: Request, res: Response): Promise<void> => {
  const { body: formLogin }: { body: IFormLogin } = req

  const { error } = FormLoginSchema(formLogin)

  if (error !== undefined) {
    res.status(400).send({
      message: error.message,
    })
    return
  }

  try {
    const {
      data: entityFound,
      found: entityIsFound,
      entity: entityType,
    } = await fetchAdminOurUserWithEmail(formLogin.email)

    if (!entityIsFound || entityFound === null) {
      res.status(404).send({
        message: "Email ou senha incorretos! Tente novamente.",
      })
      return
    }

    const passwordIsValid = bcrypt.compareSync(
      formLogin.password,
      entityFound.password
    )

    if (!passwordIsValid) {
      res.status(404).send({
        message: "Email ou senha incorretos! Tente novamente.",
      })
      return
    }

    const JWTTokenAuthorization = createTokenJWTEntitieRole(
      {
        email: entityFound.email,
        isAdmin: entityType === "Admin",
        name: entityFound.name,
        permissions: entityFound.permissions,
      },
      process.env.TOKEN_SECRET ?? null
    )

    res
      .status(200)
      .cookie(
        process.env.TOKEN_AUTHORIZATION ?? "token_authorization_role",
        JWTTokenAuthorization,
        {
          secure: true,
          httpOnly: true,
        }
      )
      .send({
        message: "Login realizado com sucesso!",
      })
  } catch (error) {
    console.log(`Erro ao fazer login -----> ${JSON.stringify(error)}`)
    res.status(500).send({
      message:
        "Ocorreu um erro interno no servidor no processo de login! Tente novamente ou entre em contato com o desenvolvedor.",
    })
  }
}

export default loginController
