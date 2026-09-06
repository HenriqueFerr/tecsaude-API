import bcryp from "bcrypt";
import prisma from "../config/prismaConfig.js";

export async function newUser(dados) {
    const passwordHash = await bcryp.hash(dados.password, 10)
    const user = await prisma.user.create({
        data: {
            name: dados.name,
            email: dados.email,
            password: passwordHash
        }
    });

    const { password, ...userSemSenha } = user

    return userSemSenha;
};

export async function getUsers() {
    const user = await prisma.user.findMany();
    return user;
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

    return user;
};

export async function updateUser(id,dados) {
    const notAUser = await prisma.user.findUnique ({
        where: {
            id
        }
    });

    if (!notAUser) {
        return null
    }

    const passwordHash = await bcryp.hash(dados.password, 10);

    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            name: dados.name,
            email: Date.email,
            password: passwordHash
        }
    });
    return removePassword
}

export async function deleteUser(id) {
    const user = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });
    return user;
};