import { Router } from "express";
import { body } from "express-validator";

const loginRouter = Router();

import { loginController } from "../controllers/loginController.js";
import { checkEmpty } from "../utils/helper.js";

loginRouter.post("/",
    [
        body("username").notEmpty(),
        body("password").notEmpty()
    ],
    checkEmpty,
    loginController.post);

export { loginRouter };
