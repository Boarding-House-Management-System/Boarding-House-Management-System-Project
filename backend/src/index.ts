import express from "express";
import authRouter from "./routes/authRouter";
import mysql from "mysql";
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.SQL_user,
  password: process.env.SQL_password,
  database: "bhms"
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
  // connection.query(`SHOW DATABASES`,
  // function (err, result) {
  //     if (err)
  //         console.log(`Error executing the query - ${err}`)
  //     else
  //         console.log("Result: ", result)
  // });
});

app.use(authRouter);