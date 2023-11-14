import { connection } from "./connect.js"

const createDB = () => {
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });

    connection.query(
        `CREATE TABLE IF NOT EXISTS users (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,
        function (err, results, fields) {
            if (err) throw err;
            console.log(results);
        }
    );
};

export { createDB };