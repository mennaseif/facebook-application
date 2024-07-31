import express from 'express'
import sequelize from './database/dbConnection.js'
import userRouter from './modules/user/user.routes.js'
import postRouter from './modules/post/post.routes.js'
import commentRouter from './modules/comment/comment.routes.js'
import cors from "cors"
const app = express()
const port =process.env.PORT || 3000
app.use(cors())

 sequelize.sync({alter:true})
 app.use(express.json())
 app.use('/auth',userRouter)
 app.use('/login',userRouter)
 app.use('/logout',userRouter)
 app.use('/users',userRouter)
 app.use('/posts',postRouter)
 app.use('/specificPost', postRouter)
 app.use('/comments',commentRouter)
 app.use('/getall',commentRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))