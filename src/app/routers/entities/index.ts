import { Router } from "express"

import adminRouters from "../../entities/Admin/routers/index"
import { endPointRouter } from "./settings"

const router = Router()

router.use(`${endPointRouter}/admin`, adminRouters)

export default router
