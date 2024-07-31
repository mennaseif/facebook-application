import { Router } from "express"
import { addUser, deleteUser, login,logout, readUsers, signup, updateUser } from "./user.controller.js"



const userRouter = Router()
userRouter.post('/signup', signup)

userRouter.route('/')
          .post(login)
          .post(addUser)
          .get(readUsers)
          .put(updateUser)
          .delete(deleteUser)
          .patch(logout)

export default userRouter