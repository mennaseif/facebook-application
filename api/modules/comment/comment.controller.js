import { json } from "sequelize"
import { commentModel } from "../../database/models/comment.models.js"
import { postModel } from "../../database/models/post.models.js"
import { userModel } from "../../database/models/user.models.js"


const addComment = async (req, res) => {
    await commentModel.create(req.body)
     res.json({message: "success"})
}

const readComment = async (req, res) => {
    let comments = await commentModel.findAll(req.body)
     res.json({message: "success", comments})
 }

const updateComment = async (req, res) => {
   const {id} = req.query
   const {content,userId} = req.body
   const comment= await commentModel.update({content}, {where: {id, userId}})
   return comment >0 
   ? res.json({message:"comment updated successfully"})
   : res,json({message:"invalid comment"})
 } 

const deleteComment = async (req, res) => {
    const {id} = req.query
    const {userId} = req.body
    const comment= await commentModel.destroy({where: {id, userId}})
    return comment >0 
    ? res.json({message:"comment deleted successfully"})
    : res,json({message:"invalid comment"})
 } 

 const userWithPostsAndComment = async (req, res) =>{
   const users = await userModel.findAll({
    include:{
        model:postModel,
        attributes: ["title"],
        include: {model: commentModel, attributes : ["content"]}
    }
   })
   res.json({message:"success", users})
 }

export{
    addComment,
    readComment,
    updateComment,
    deleteComment,
    userWithPostsAndComment 
}