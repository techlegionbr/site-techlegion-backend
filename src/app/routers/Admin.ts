import { Router } from "express"

import { AdminSchema } from "../../entities/schemas/validations/Admin"
import { type IAdminSchemaValidation } from "../../entities/schemas/types/Admin"

const router = Router()

router.post("/create-admin", (req, res) => {
  const { body: Admin }: { body: IAdminSchemaValidation } = req
  const { error } = AdminSchema(Admin)

  console.log(error)
  console.log(Admin)
  res.end()
})

export default router
