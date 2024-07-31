import { userModel } from "../../database/models/user.models.js"
import { postModel } from "../../database/models/post.models.js"
import { commentModel } from "../../database/models/comment.models.js"



const addPost = async (req, res) => {
    await postModel.create(req.body)
     res.json({message: "success"})
}

const readPost = async (req, res) => {
    let posts = await postModel.findAll(req.body)
     res.json({message: "success", posts})
}

const updatePost =async (req, res) => {
    let [created] = await postModel.update({
        content:"facebook"
    },{
        where:{
            id:1
        }
    })
    if (created){
        res.json({message: "success"})
    }else{
        res.json({message: "post is not found"})
    }  
}

const deletePost = async (req, res) => {
    let created = await postModel.destroy({
        where:{
            id:1
        }
    })
    if (created){
        res.json({message: "success"})
    }else{
        res.json({message: "post is not found"})
    }  
}

const getSpecificPost = async (req, res) =>{
    const post = await postModel.findAll({
        include: {
            model: userModel,
        }
    })
    res.json({message:"success", post})
}

export{
    addPost,
    readPost,
    updatePost,
    deletePost,
    getSpecificPost

}