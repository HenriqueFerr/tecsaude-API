import { Router } from "express";

import { 
    newUserController,
    getUsersController,
    getUserByIdController,
    DeleteUserController,
} from "../controllers/criaUsuarioController.js"

const router = Router();


router.post("/", newUserController);
router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.get("/delete:id", DeleteUserController)



export default router;