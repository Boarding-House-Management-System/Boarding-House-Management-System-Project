import express from "express";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import dotenv from 'dotenv';
import connection from "./connections/database";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
dotenv.config();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

 
app.use("/auth",authRouter);
app.use("/user",userRouter);