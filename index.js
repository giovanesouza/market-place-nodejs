// Importações
const express = require('express');
require('dotenv').config(); // Configura tudo do .env antes de chamar qualquer arquivo que dependa dele
const connectToDataBase = require('./src/database/database'); // Conexão com o BD
const usuario = require('./src/router/usuario.router'); // Rotas do usuário
const auth = require('./src/router/auth.router'); // Rotas de auth
const produto = require('./src/router/produto.router'); // Rotas de produto
const categoria = require('./src/router/categoria.router'); // Rotas de categoria
const carrinho = require('./src/router/carrinho.router'); // Rotas do carrinho
const pedido = require('./src/router/pedido.router'); // Rotas do pedido
const docs = require('./src/router/docs.router'); // Rotas de documentação


const app = express();

const port = 3000;


app.use(express.json()); // Para trabalhar com JSON (API REST)

connectToDataBase(); // Conecta com BD


app.use('/usuario', usuario); // Chamando as rotas do usuário
app.use('/auth', auth); // Chamando as rotas de auth
app.use('/produto', produto); // Chamando as rotas do produto
app.use('/categoria', categoria); // Chamando as rotas de categoria
app.use('/carrinho', carrinho); // Chamando as rotas de carrinho
app.use('/pedido', pedido); // Chamando as rotas de pedido
app.use('/docs', docs); // Chamando as rotas de documentação


app.get('/', (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
});


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});