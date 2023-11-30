import { Router } from "express";
const roomRouter = Router();

import { roomController } from "../controllers/roomController";
import { body } from "express-validator";
import { checkEmpty } from "../utils/helper";
import { checkAuth } from "../utils/auth";

roomRouter.post("/",
    [
        body("name").notEmpty(),
        body("desc_data").notEmpty()
    ],
    checkEmpty,
    checkAuth,
    roomController.post);
// roomRouter.delete("/*", roomController.delete)

export { roomRouter };
