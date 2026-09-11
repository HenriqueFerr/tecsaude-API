import bcryp from "bcrypt";
import prisma from "../config/prismaConfig.js";
import { AppError } from "../utils/AppError.js"

function removePassword(user) {
    const {password, ...userWithoutPassword } = user;

    return userWithoutPassword
}

export async function newUser(dados) {

    const existingUser = await prisma.user.findUnique({
        where: {
            email: dados.email
        }
    });

    if (existingUser) {
        throw new AppError(
            "Email já cadastrado.",
            409
        );
    }

    const passwordHash = await bcryp.hash(
        dados.password, 
        10
    );

    const user = await prisma.user.create({
        data: {
            name: dados.name,
            email: dados.email,
            password: passwordHash
        }
    });

    return userWithoutPassword(user);
};

export async function getUsers() {
    const users = await prisma.user.findMany();
    
    return users.map(removePassword)
}

export async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    if (!user) {
        return null;
    }

    return removePassword(user);
};

export async function updateUser(id,dados) {
    const existingUser = await prisma.user.findUnique ({
        where: {
            id
        }
    });

    if (!existingUser) {
        return null
    }

    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email: dados.email
        }
    });

    if ( userWithSameEmail && userWithSameEmail !== id) {
        throw new AppError (
            "Email já cadastrado",
            409
        )
    }

    const passwordHash = await bcryp.hash(dados.password, 10);

    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            name: dados.name,
            email: dados.email,
            password: passwordHash
        }
    });
    return removePassword(user)
}

export async function deleteUser(id) {
    const existingUser = await prisma.user.findUnique({
        where: {
            id
        }
    });

    if (!existingUser) {
        return null;
    }

    const user = await prisma.user.delete({
        where: {
            id
        }
    });

    return removePassword(user)
};