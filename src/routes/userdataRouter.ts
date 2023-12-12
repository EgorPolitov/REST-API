import { Router } from "express";
const userdataRouter = Router();

import { userdataController } from "../controllers/userdataController";
import { checkAuth } from "../utils/auth";
import { checkEmpty } from "../utils/helper";
import { body } from "express-validator";


userdataRouter.patch("/:id",
    checkAuth,
    userdataController.patch);
    
userdataRouter.delete("/:id",
    userdataController.delete);

export { userdataRouter };

