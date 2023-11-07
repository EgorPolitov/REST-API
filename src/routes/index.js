import { Router } from "express";

const router = Router();

// Routers
import { signupRouter } from "./signupRouter.js";
import { loginRouter } from "./loginRouter.js";
import { roomRouter } from "./roomRouter.js";
import { roomsRouter } from "./roomsRouter.js";

// use Routers
router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/room", roomRouter);
router.use("/rooms", roomsRouter);
router.use("/", (req, res) => {
    res.send('Hello World!')
})

export { router };
