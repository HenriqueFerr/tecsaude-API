import express from "express";
import dotenv from "dotenv";

import criaUsuarioRoute from "./routes/criaUsuarioRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", criaUsuarioRoute)


app.get("/", (req, res) => {
    res.json({
        message: "API funcionando"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});