import { 
    newUser, 
    getUsers, 
    getUserById 
} from "../services/userService.js"


export async function newUserController(req, res) {
    try {
        console.log("BODY RECEBIDO", req.body);
        const user = await newUser(req.body);

        return res.status(200).json(user);
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
        console.log("PARAMS:", req.params)
        const user = await getUserById(req.params.id);
        return res.status(200).json(user)
    }catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Erro ao buscar usuário."
        });
    }
}
