import { Router } from "express";

const router = Router();

// Routers
import { signupRouter } from "./signupRouter.js";
import { loginRouter } from "./loginRouter.js";

// use Routers
router.use("/signup", signupRouter);
router.use("/login", loginRouter);

export { router };
