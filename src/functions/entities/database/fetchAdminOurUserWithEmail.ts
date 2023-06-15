import Admin from "../../../app/entities/Admin/schemas/database/Admin"
import { type IAdminSchemaDB } from "../../../app/entities/Admin/types/Admin"
import User from "../../../app/entities/User/schemas/database/User"
import { type IUserSchemaDB } from "../../../app/entities/User/types/User"

interface IResponseFetchAdminsAndUsersWithEmail {
  found: boolean
  entity: "User" | "Admin" | null
  data: IAdminSchemaDB | IUserSchemaDB | null
}

const fetchAdminOurUserWithEmail = async (
  email: string
): Promise<IResponseFetchAdminsAndUsersWithEmail> => {
  try {
    const [user, admin] = await Promise.all([
      User.findOne({ email }),
      Admin.findOne({ email }),
    ])

    if (Boolean(user) && Boolean(admin)) {
      throw new Error(
        JSON.stringify({
          origin: "existsEmailForUserOrAdmin",
          reason: "Existe duas entidades registradas com o mesmo email",
          entities: [user, admin],
        })
      )
    }

    if (user === null && admin === null) {
      return {
        found: false,
        entity: null,
        data: null,
      }
    }

    return {
      found: true,
      entity: user !== null ? "User" : "Admin",
      data: user ?? admin,
    }
  } catch (error) {
    console.log(
      `Erro na função "existsEmailForUserOrAdmin" | busca no banco de dados ---> ${JSON.stringify(
        error
      )}`
    )
    throw new Error(
      JSON.stringify({
        origin: "existsEmailForUserOrAdmin",
        reason: "Busca no banco de dados pelas entidades 'User' ou 'Admin'",
        error,
      })
    )
  }
}

export default fetchAdminOurUserWithEmail
