// Importações
const express = require('express');
const connectToDataBase = require('./src/database/database'); // Conexão com o BD
const usuario = require('./src/router/usuario.router'); // Rotas do usuário

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

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});