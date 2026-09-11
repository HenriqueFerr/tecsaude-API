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

        return res.status(201).json(user);
    }catch (e) {
        next(e);
    }
};


export async function getUsersController(req, res, next) {
    try{
        const user = await getUsers();
        return res.status(200).json(user);
    }catch (e){
        next(e);
    }
}

export async function getUserByIdController(req, res, next) {
    try{
        const user = await getUserById(req.params.id);

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

        return res.status(200).json(user);
    }catch (e){
        next(e);
    }
}

export async function deleteUserController(req, res) {
    try {
        const user = await deleteUser(req.params.id);

        return res.status(200).json(user)
    }catch (e) {
        next(e);
    }
}