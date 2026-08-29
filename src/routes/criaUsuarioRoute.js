import { Router } from "express";

import { 
    newUserController,
    getUsersController,
    getUserByIdController,
} from "../controllers/criaUsuarioController.js"

const router = Router();


router.post("/", newUserController);
router.get("/", getUsersController);
router.get("/:id", getUserByIdController)


export default router;