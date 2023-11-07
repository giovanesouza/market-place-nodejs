// Importações
const express = require('express');
const connectToDataBase = require('./src/database/database');
const usuario = require('./src/router/usuario.router');

const app = express();

const port = 3000;


app.use(express.json()); // Para trabalhar com JSON (API REST)

connectToDataBase(); // Conecta ao BD


app.use('/usuario', usuario);


app.get('/', (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});