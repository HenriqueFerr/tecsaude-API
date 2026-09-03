import { Router } from "express";

import { 
    newUserController,
    getUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
} from "../controllers/criaUsuarioController.js"

const router = Router();


router.post("/", newUserController);
router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.put("/:id", updateUserController)
router.delete("/:id", deleteUserController)



export default router;