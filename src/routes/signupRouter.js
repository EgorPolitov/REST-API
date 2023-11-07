import { Router } from "express";
const signupRouter = Router();

import { signupController } from "../controllers/signupController.js";

import { validate } from "../utils/validate.js";

signupRouter.post("/", validate(["username", "password"]), signupController.post);

export { signupRouter };
