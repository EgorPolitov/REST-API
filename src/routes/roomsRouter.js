import { Router } from "express";
const roomsRouter = Router();

import { roomsController } from "../controllers/roomsController.js";

// Нужна валидация Bearer token'а
roomsRouter.get("/", roomsController.get);

export { roomsRouter };
