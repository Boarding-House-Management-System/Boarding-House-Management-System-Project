import mysql from "mysql";

const database = async()=>{
    const connection = await mysql.createConnection({
      host: "localhost",
      user: process.env.SQL_user,
      password: process.env.SQL_password,
      database: "bhms"
    });
    connection.connect((err) => {
        if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
        }
        console.log("Connected to database.");
    });
}

export default database;
