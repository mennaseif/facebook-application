import { Router } from "express"
import { addPost, deletePost, readPost, updatePost, getSpecificPost } from "./post.controller.js"

 const postRouter = Router()

 postRouter.get('/', getSpecificPost)
 postRouter.route('/')
          .post(addPost)
          .get(readPost)
          .put(updatePost)
          .delete(deletePost)

export default postRouter