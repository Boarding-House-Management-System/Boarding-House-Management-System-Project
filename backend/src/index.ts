import express from "express";
import authRouter from "./routes/authRouter";
import dotenv from 'dotenv';
import database from "./connections/database";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

database();

 
app.use(authRouter);