import { Router } from "express"
import { addComment, deleteComment, readComment, updateComment, userWithPostsAndComment} from "./comment.controller.js"

const commentRouter = Router()

commentRouter.get('/',userWithPostsAndComment)
commentRouter.route('/').post(addComment)
             .get(readComment)
             .put(updateComment)
             .delete(deleteComment)
        

export default commentRouter