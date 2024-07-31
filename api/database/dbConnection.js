import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('mysql://u8jqazcxjyfh9jdb:VdyfJflHpqjEH60zPQfg@bdlnfnogbxt8obmdjtil-mysql.services.clever-cloud.com:3306/bdlnfnogbxt8obmdjtil')

sequelize.authenticate().then(() =>{
    console.log('Connection has been established successfully.')
}).catch ((err) =>{
    console.error('Unable to connect to the database:');
}) 

export default sequelize