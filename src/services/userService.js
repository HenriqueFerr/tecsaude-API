import prisma from "../config/prismaConfig.js";

export async function newUser(dados) {
    const usuarios = await prisma.user.create({
        data: {
            name: dados.name,
            email: dados.email,
            password: dados.password
        }
    });

    return usuarios;
};

export async function getUsers() {
    const usuarios = await prisma.user.findMany();

    return usuarios;
}

export async function getUserById(id) {
    const usuarios = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    });

    return usuarios;
};

/*export async function updateUserById(dados) {
    const updateUserById = await prisma.user.update({
        where: {
            id: dados.id
        },
        data: {
            id: dados.id
        }
    })
    return updateUserById;
};*/