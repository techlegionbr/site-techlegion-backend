import { model, Schema, type Document } from "mongoose"

import { type TPermissions } from "../../types/Permissions"
import { type IAdminModel } from "../types/Admin"

interface IAdminModelDocument extends IAdminModel, Document {}

const AdminSchema = new Schema<IAdminModelDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  permissions: {
    type: [
      {
        type: String,
      },
    ],
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

export default model<IAdminModelDocument>("Admin", AdminSchema)
