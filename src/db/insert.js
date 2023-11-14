import { connection } from "./connect.js"

const insert = (name, password) => {
    connection.query(
        `INSERT INTO users (username, password) VALUES ("${name}", "${password}");`,
        (err, results, fields) => {
            if (err) throw err;
            console.log(results);
        }
    );

};

export { insert };