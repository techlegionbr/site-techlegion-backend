import { model, Schema, type Document } from "mongoose"
import { v4 as uuidv4 } from "uuid"

import { type IUserModel } from "../types/User"

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: {
    type: String,
    required: false,
    default:
      "https://storage.prompt-hunt.workers.dev/clgzqg3dz004dk6082ji3cesa_1",
  },
  code: { type: String, required: false, default: uuidv4() },
  inUse: { type: Boolean, required: false, default: false },
})

export default model<IUserModel & Document>("User", UserSchema)
