import { Router } from "express"

import { createAdmin } from "../controllers"

const router = Router()

router.post(`/create-admin`, createAdmin)

export default router
