import { Router } from "express";
const loginRouter = Router();

import { loginController } from "../controllers/loginController.js";
import { validateUser } from "../middleware/validation.js";

loginRouter.post("/", validateUser, loginController.post);

export { loginRouter };
