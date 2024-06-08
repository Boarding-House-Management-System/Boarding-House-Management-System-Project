import mysql from "mysql";
import dotenv from 'dotenv';
// import { Sequelize } from "sequelize";

dotenv.config(); 

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.SQL_user,
  password: process.env.SQL_password,
  database: "bhms",
});

// export const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

export default connection; 

