import { Router } from "express";
const roomRouter = Router();

import { roomController } from "../controllers/roomController.js";
import { validate } from "../utils/validate.js";

// Нужна валидация Bearer token'а
roomRouter.post("/", validate(["name", "desc_data"]), roomController.post);
// Нужна валидация Bearer token'а
roomRouter.delete("/*", roomController.delete)

export { roomRouter };
