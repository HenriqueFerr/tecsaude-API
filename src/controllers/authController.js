import prisma from "../config/prismaConfig.js";
import { loginUser } from "../services/authService.js";

export async function loginController(req, res, next) {
    try {
        const user= await loginUser(req.body);
        return res.status(200).json({
            message: "Login realizado com sucesso.",
            user
        });
    }catch(e){
        next(e);
    }
}