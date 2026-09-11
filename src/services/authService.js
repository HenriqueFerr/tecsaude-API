import bcryp from "bcrypt";
import prisma from "../config/prismaConfig.js";
import { AppError } from "../utils/AppError.js";

export async function loginUser(dados) {
    const user = await prisma.user.findUnique({
        where: {
            email: dados.email
        }
    });

    if (!user){
        throw new AppError(
            "Email ou senha inválidos.",
            401
        );
    }

    const passwordMatch = await bcryp.compare(
        dados.password,
        user.password
    );

    if (!passwordMatch) {
        throw new AppError(
            "Email ou senha inválidos.",
            401
        );
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};