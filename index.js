// Importações
const express = require('express');
require('dotenv').config(); // Configura tudo do .env antes de chamar qualquer arquivo que dependa dele
const connectToDataBase = require('./src/database/database'); // Conexão com o BD
const usuario = require('./src/router/usuario.router'); // Rotas do usuário
const authService = require('./src/service/auth.service'); // Service de autorização

const app = express();

const port = 3000;


app.use(express.json()); // Para trabalhar com JSON (API REST)

connectToDataBase(); // Conecta com BD


app.use('/usuario', usuario); // Chamando as rotas do usuário


app.get('/', (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
});

// Rota de login
app.post("/login", async (req, res) => {

    try {

        // Recuperação do email e senha por meio de - desconstrução de objeto - { email, senha }
        const { email, senha } = req.body; // req.body é um objeto

        const user = await authService.loginService(email); // Verifica se o email passado existe

        // Caso não exista...
        if (!user) {
            return res.status(400).send({ message: "Usuário não encontrado. Tente novamente." });
        }


        // Verifica se a senha passada no corpo da requisição é diferente da senha do usuário requisitado
        if (senha != user.senha) {
            return res.status(400).send({ message: "Senha inválida!" });
        }

        const token = authService.generateToken(user.id);

        res.send(token);


    } catch (err) {

        console.log(`Erro: ${err}`);

    }

});


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});