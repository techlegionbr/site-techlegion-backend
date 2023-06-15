import { Schema, model } from "mongoose"
import { v4 as uuidv4 } from "uuid"

import { profileDefault } from "../../settings"
import { type IUserSchemaDB } from "../../types/User"

interface IUserModelDocument extends IUserSchemaDB, Document {}

const UserSchema = new Schema<IUserModelDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile: {
      type: String,
      required: false,
      default: profileDefault,
    },
    code: { type: String, required: false, default: uuidv4() },
    inUse: { type: Boolean, required: false, default: false },
  },
  { timestamps: true }
)

export default model<IUserModelDocument>("User", UserSchema)
