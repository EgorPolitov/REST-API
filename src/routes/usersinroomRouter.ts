import { Router } from "express";
const usersinroomRouter = Router();

import { usersinroomController } from "../controllers/usersinroomController";
import { checkAuth } from "../utils/auth";

usersinroomRouter.get("/",
    checkAuth,
    usersinroomController.get);

export { usersinroomRouter };
