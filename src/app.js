import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes)


app.get("/", (req, res) => {
    res.json({
        message: "API funcionando"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});