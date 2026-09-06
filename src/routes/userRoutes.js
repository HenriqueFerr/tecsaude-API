import { Router } from "express";

import { 
    newUserController,
    getUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
} from "../controllers/userController.js"

import { validateId } from "../middlewares/validateIdMiddleware.js"

const router = Router();


router.post("/", newUserController);
router.get("/", getUsersController);
router.get("/:id", validateId, getUserByIdController);
router.put("/:id", validateId, updateUserController)
router.delete("/:id", validateId, deleteUserController)



export default router;