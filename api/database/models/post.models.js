import { DataTypes } from 'sequelize'
 import sequelize from '../dbConnection.js'

 export const postModel= sequelize.define('post',{
    title:{
          type:DataTypes.STRING(100)
    },
 
    content:{
           type:DataTypes.STRING(100)
    },
 })

 