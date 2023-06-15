import { Router } from "express"

import {
  loginController,
  registerController,
} from "../../authentiaction/controllers"
import { endPointRouter } from "./settings"

const router = Router()

router.post(`${endPointRouter}/login`, loginController)
router.post(`${endPointRouter}/register`, registerController)

export default router
