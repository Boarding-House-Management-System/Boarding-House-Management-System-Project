import express from "express";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import dotenv from 'dotenv';
import connection from "./connections/database";
import bodyParser from "body-parser";
import sequelize from "./connections/database";


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
dotenv.config();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// sequelize.connect((err:any) => {
//   if (err) {
//     console.error("Database connection failed: " + err.stack);
//     return;
//   }
//   console.log("Connected to database.");
// });
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });
 
app.use("/auth",authRouter);
app.use("/user",userRouter);