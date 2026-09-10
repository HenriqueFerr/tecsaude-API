import { 
    newUser, 
    getUsers, 
    getUserById,
    updateUser,
    deleteUser,
} from "../services/userService.js"


export async function newUserController(req, res) {
    try {
        const user = await newUser(req.body);

        if(user.error === "EMAIL_ALREADY_EXIST") {
            return res.status(409).json({
                message: "Email já existente."
            });
        }

        return res.status(201).json(user);
    }catch (e) {
        console.error(e);

        return res.status(500).json({
            message: "Erro ao criar usuário."
        });
    }
};


export async function getUsersController(req, res) {
    try{
        const user = await getUsers();
        return res.status(200).json(user);
    }catch (e){
        console.error(e);

        return res.status(500).json({
            message: "Erro ao buscar usuários."
        });
    }
}

export async function getUserByIdController(req, res) {
    try{
        const user = await getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado"
            })
        }

        return res.status(200).json(user);
    }catch(e){
        console.error(e);

        return res.status(500).json({
            message: "Erro ao buscar usuário."
        });
    }
}

export async function updateUserController (req, res) {
    try {
        const user = await updateUser(
            req.params.id,
            req.body
        );
        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado."
            });
        }

        if (user.error === "EMAIL_ALREADY_EXIST") {
            return res.status(409).json({
                message: "Email já cadastrado."
            })
        }

        return res.status(200).json(user);
    }catch (e){
        console.log(e)
        return res.status(500).json({
            message: "Erro ao atualizar o usuário"
        });
    }
}

export async function deleteUserController(req, res) {
    try {
        const user = await deleteUser(req.params.id);

        if(!user) {
            return res.status(404).json({
                message: "Usuário não encontrado."
            });
        }
        return res.status(200).json(user)
    }catch (e) {
        console.error(e);
        return res.status(500).json({
            message: "Erro ao deletar usuário."
        });
    }
}