import { Router } from "express";
const roomsRouter = Router();

import { roomsController } from "../controllers/roomsController";
import { checkAuth } from "../utils/auth";

roomsRouter.get("/",
    checkAuth,
    roomsController.get);

export { roomsRouter };
