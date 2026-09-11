import { Router } from "express";
import { loginController } from "../controllers/authController.js";
import { validateLoginBody } from "../middlewares/validateLoginBodyMiddleware.js"

const router = Router();

router.post("/login",validateLoginBody, loginController);

export default router