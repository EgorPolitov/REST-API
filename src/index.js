import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () =>
  console.log(`Server started on port ${port}`, new Date())
);

import mysql from "mysql2";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my-server-db',
    password: ""
});

connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});