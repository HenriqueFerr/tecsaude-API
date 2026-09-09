export function validateUserBody (req, res, next) {
    const { name, email, password} = req.body;

    if ( !name || typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            message: "Nome é obrigatório."
        });
    }
    next();

    if(!email || typeof email !== "string" || name.trim() === "") {
        return res.status(400).json({
            message: "Email é obrigatório."
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        return res.status(400).json({
            message: "Email inválido."
        });
    }

    if(!password || typeof password !== "string" || password.trim() === "") {
        return res.status(400).json({
            message: "Senha é obrigatório."
        });
    }

    if (password.length<6) {
        return res.status(400).json({
            message: "A senha deve conter mais de 6 caracteres."
        });
    }
}