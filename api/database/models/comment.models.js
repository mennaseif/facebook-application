import { DataTypes } from 'sequelize'
import { userModel } from './user.models.js'
import { postModel } from './post.models.js'
import sequelize from '../dbConnection.js'



 export const commentModel= sequelize.define('comment',{

    content:{
          type:DataTypes.STRING(100),
          allowNull:false,
    },
 })

 userModel.hasMany(commentModel,{
   onDelete:"CASCADE",
   update:"CASCADE"
 })
 commentModel.belongsTo(userModel)
 postModel.hasMany(commentModel)
 postModel.hasMany(commentModel,{
   onDelete:"CASCADE",
   update:"CASCADE"
 })