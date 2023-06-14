import { model, Schema, type Document } from "mongoose"

import { type TPermissions } from "../../types/Permissions"
import { type IAdminModel } from "../types/Admin"

const AdminSchema = new Schema<Record<IAdminModel, string>>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  permissions: {
    type: Array,
    required: false,
    default: [
      "createAdmin",
      "createPost",
      "createUser",
      "editProfile",
      "manageAdmin",
      "manageAllAdmins",
      "manageAllPosts",
      "manageAllUsers",
      "managePost",
      "manageUser",
      "seePanel",
    ] as TPermissions[],
  },
})

export default model<IAdminModel & Document>("Admin", AdminSchema)
