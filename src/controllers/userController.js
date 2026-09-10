import { 
    newUser, 
    getUsers, 
    getUserById,
    updateUser,
    deleteUser,
} from "../services/userService.js"

import { AppError } from "../utils/AppError.js"


export async function newUserController(req, res, next) {
    try {
        const user = await newUser(req.body);

        if(user.error === "EMAIL_ALREADY_EXIST") {
            throw new AppError (
                "Email já cadastrado.",
                409
            )
        }

        return res.status(201).json(user);
    }catch (e) {
        next(e)
    }
};


export async function getUsersController(req, res, next) {
    try{
        const user = await getUsers();
        return res.status(200).json(user);
    }catch (e){
        next(e)
    }
}

export async function getUserByIdController(req, res, next) {
    try{
        const user = await getUserById(req.params.id);

        if (!user) {
            throw new AppError(
                "usuário não encontrado.",
                404
            );
        }

        return res.status(200).json(user);
    }catch(e){
        next(e);
    }
}

export async function updateUserController (req, res, next) {
    try {
        const user = await updateUser(
            req.params.id,
            req.body
        );
        if (!user) {
            throw new AppError(
                "usuário não encontrado.",
                404
            );
        }

        if (user.error === "EMAIL_ALREADY_EXIST") {
            throw new AppError(
                "Email já cadastrado",
                409
            )
        }

        return res.status(200).json(user);
    }catch (e){
        next(e)
    }
}

export async function deleteUserController(req, res) {
    try {
        const user = await deleteUser(req.params.id);

        if(!user) {
            throw new AppError(
                "usuário não encontrado.",
                404
            )
        }
        return res.status(200).json(user)
    }catch (e) {
        next(e)
    }
}