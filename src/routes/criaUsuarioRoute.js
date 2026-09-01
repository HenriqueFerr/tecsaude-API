import { Router } from "express";

import { 
    newUserController,
    getUsersController,
    getUserByIdController,
    deleteUser,
} from "../controllers/criaUsuarioController.js"
import { deleteUser } from "../services/userService.js";

const router = Router();


router.post("/", newUserController);
router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.get("/", deleteUser)



export default router;