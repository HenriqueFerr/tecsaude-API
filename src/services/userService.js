import prisma from "../config/prismaConfig.js";

export async function newUser(dados) {
    const user = await prisma.user.create({
        data: {
            name: dados.name,
            email: dados.email,
            password: dados.password
        }
    });

    return user;
};

export async function getUsers() {
    const user = await prisma.user.findMany();

    return user;
}

export async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    });

    return user;
};

export async function updateUser(id,dados) {
    const user = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: dados.name,
            email: dados.email,
            password: dados.password
        }
    });
    return user;
}

export async function deleteUser(id) {
    const user = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });
    return user;
};