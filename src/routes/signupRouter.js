import { Router } from "express";
const signupRouter = Router();

import { signupController } from "../controllers/signupController.js";
import { validateUser } from "../middleware/validation.js";

signupRouter.post("/", validateUser, signupController.post);

export { signupRouter };
 