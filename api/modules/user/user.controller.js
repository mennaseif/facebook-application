import { userModel } from "../../database/models/user.models.js"
import { postModel } from "../../database/models/post.models.js"
import { commentModel } from "../../database/models/comment.models.js"
import bcrypt from 'bcrypt'

const signup = async (req, res) => {
    try {
        const { username, email, password: unhashedpassword } = req.body;
        const existUser = await userModel.findOne({ where: { email } });
        if (existUser) {
          return res.status(400).json({ error: 'Email already exist' });
        }

        const hashedpassword = bcrypt.hashSync(unhashedpassword, 10);
        const newUser = await userModel.create({ username, email, password: hashedpassword});
    
        res.status(201).json({ username: newUser.username, email: newUser.email });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}


const login = async (req, res) =>{
    try {
        const { email, password } = req.body;

    const user = await userModel.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error:'Invalid email or password'});
    }

    const isValid = await bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return res.status(401).json({ error:'Invalid email or password'});
    }

    const loginStatus = await user.update({loginStatus : true})

    res.status(201).json({message:"login successfully", user});

      } catch (error) {
        res.status(500).json({error: error.message });
      }
}


const addUser = async (req, res) => {
    await userModel.create(req.body)
     res.json({message: "success"})
}

const readUsers = async (req, res) => {
    let users = await userModel.findAll(req.body)
     res.json({message: "success", users})
}

const updateUser = async (req, res) => {
    let [created] = await userModel.update({
        name:"mennaSeif"
    },{
        where:{
            id:1
        }
    })
    if (created){
        res.json({message: "success"})
    }else{
        res.json({message: "user is not found"})
    } 
}

const deleteUser = async (req, res) => {
    let created = await userModel.destroy({
        where:{
            id:4
        }
    })
    if (created){
        res.json({message: "success"})
    }else{
        res.json({message: "user is not found"})
    } 
}


const logout = async (req , res) =>{
   const {id} = req.query
   const loginStatus = await userModel.update(
    {loginStatus: false}, 
    {where: {id}})
    
   res.json({message:"logout successfully", loginStatus})
    };

export {
    signup,
    login,
    addUser,
    readUsers,
    updateUser,
    deleteUser,
    logout
}