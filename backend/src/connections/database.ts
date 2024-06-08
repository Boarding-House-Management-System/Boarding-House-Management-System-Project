import mysql from "mysql";
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from "sequelize";

dotenv.config(); 

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: process.env.SQL_user,
//   password: process.env.SQL_password,
//   database: "bhms",
// });

const sequelize = new Sequelize(
    process.env.SQL_database || 'bhms',
    process.env.SQL_user || 'root',
    process.env.SQL_password || 'default_password',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

export default sequelize; 

