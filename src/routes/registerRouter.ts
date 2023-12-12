import { Router } from "express";
const registerRouter = Router();

import { registerController } from "../controllers/registerController";
import { checkAuth } from "../utils/auth";
import { checkEmpty } from "../utils/helper";
import { body } from "express-validator";

registerRouter.post("/",
    checkAuth,
    [
        body("fio").notEmpty(),
        body("email").notEmpty(),
        body("phone").notEmpty(),
        body("id_rooms").notEmpty(),
        body("birth_date").notEmpty()
    ],
    checkEmpty,
    registerController.post);

export { registerRouter };
