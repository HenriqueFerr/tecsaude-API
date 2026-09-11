export function validateLoginBody(req, res, next) {
    const { email, password} = req.body;

    if (!email || typeof email !== "string") {
        return res.status(400).json({
            message: "Email inválido."
        });
    };
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)){
        return res.status(400).json({
            message: "Email inválido."
        });
    };

    if (!password || typeof password !== "string" || password.trim() === "") {
        return res.status(400).json({
            message: "Senha inválida."
        });
    }
    next();
}