import { Router } from "express";

import { 
    newUserController,
    getUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
} from "../controllers/userController.js"

import { validateId } from "../middlewares/validateIdMiddleware.js";
import { validateUserBody} from "../middlewares/validateUserBodyMiddleware.js";

const router = Router();


router.post(
    "/",
    validateUserBody,
    newUserController
);
router.get(
    "/",
    getUsersController
);

router.get(
    "/:id",
    validateId,
    getUserByIdController
);

router.put(
    "/:id",
    validateId,
    validateUserBody,
    updateUserController
);

router.delete(
    "/:id",
    validateId,
    deleteUserController
);



export default router;