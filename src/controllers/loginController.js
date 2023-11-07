import { createJWT } from "../utils/jwt.js";
import { admins } from "../db/mulash_db.js"; // Времмено. Пока нету БД

class LoginController {
  async post(req, res) {
    const { username, password } = req.body;

    res.setHeader("content-type", "application/json");

    // Заменить на SQL Запрос
    const isAdminExists = admins
      .map((admin) => username == admin.username && password == admin.password)
      .includes(true);

    if (!isAdminExists) {
      res.status(401).send({
        message: "Unauthorized",
        errors: {
          login: "invalid credentials",
        },
      });
    } else {
      const jwt_token = createJWT(req.body);

      // Сделать запрост в бд на вставку
      // INSERT INTO jwt_token
      // VALUES (userId, jwt_token)

      res.status(200).send({
        data: {
          token_user: jwt_token,
        },
      });
    }
  }
}

export const loginController = new LoginController();