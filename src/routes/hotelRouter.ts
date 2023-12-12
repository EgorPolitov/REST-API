import { Router } from "express";
const hotelRouter = Router();

import { checkAuth } from "../utils/auth";
import { hotelController } from "../controllers/hotelController";
import { body } from "express-validator";
import { checkEmpty } from "../utils/helper";

hotelRouter.post("/",
    checkAuth,
    [
        body("name").notEmpty(),
        body("number").notEmpty()
    ],
    checkEmpty,
    hotelController.post);

hotelRouter.get("/",
    hotelController.get);


hotelRouter.delete("/:id",
    hotelController.delete);


export { hotelRouter };
