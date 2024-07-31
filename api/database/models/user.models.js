 import { DataTypes } from 'sequelize'
 import { postModel } from './post.models.js'
 import sequelize from '../dbConnection.js'


 export const userModel= sequelize.define('user',{
    username:{
          type:DataTypes.STRING(100)
    },
 
    email:{
           type:DataTypes.STRING(100)
    },
 
    password:{
           type:DataTypes.STRING(100)
    },
    loginStatus:{
       type:DataTypes.BOOLEAN,
       allowNull: false,
       defaultValue:false
    }
 })

 userModel.hasMany(postModel,{
    onDelete:"CASCADE",
    update:"CASCADE"
})
postModel.belongsTo(userModel)