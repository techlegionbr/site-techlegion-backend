import { type TPermissions } from "./types"

export const permissionsAdmin: TPermissions[] = [
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
]

export const permissionsUser: TPermissions[] = [
  "seePanel",
  "manageAllPosts",
  "createPost",
  "managePost",
  "editProfile",
]
