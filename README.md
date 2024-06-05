# Marketplace NodeJS

## ℹ️ Sobre

Este projeto foi desenvolvido durante as aulas da formação em desenvolvimento Full Stack da iTalents, módulo de Desenvolvimento Back-end, e tem como objetivo disponibilizar todas as funcionalidades necessárias para o funcionamento de um marketplace como cadastro de produtos e solicitação de pedidos. Na seção `## 🔗 Endpoints` você poderá consultar todas as rotas disponíveis

## 💻 Tecnologias utilizadas

<div>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="40" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="40" />          
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="40" />
</div>


## 📝 Requisitos para rodar a aplicação

1. Ter o Git, Node uma IDE de sua preferência e o MongoDB instalados em sua máquina;
2. Baixe todo o codigo, abra o terminal do VS Code e execute o comando: `npm i`;
3. Crie um arquivo `.env` e insira as variáveis de ambiente que constam no `.env.example`;
```
URLDATABASE = "URL do seu banco no MongoDB"
SECRET = "Chave para geração do TOKEN"
```
5. Execute o projeto por meio do comando: `npm start`

## 🔗 Endpoints

### Autenticação
- POST `/login`: Realiza o login do usuário.

### Usuário
- GET `/user/:id`: Retorna um usuário específico pelo ID.
- GET `/users`: Retorna todos os usuários com paginação.
- POST `/user`: Cria um novo usuário.
- POST `/user/address`: Adiciona um endereço ao usuário específico pelo ID.
- POST `/user/favorite-product`: Adiciona um produto favorito ao usuário específico pelo ID.
- PUT `/user/:id`: Atualiza um usuário existente pelo ID.
- DELETE `/user/:id`: Remove um usuário pelo ID.
- DELETE `/user/address`: Remove um endereço do usuário.
- DELETE `/user/favorite-product`: Remove um produto favorito do usuário específico pelo ID.

### Produto
- GET `/product/:id`: Retorna um produto específico pelo ID.
- GET `/products`: Retorna todos os produtos com paginação.
- POST `/product`: Cria um novo produto.
- POST `/product/category`: Adiciona uma categoria ao produto específico pelo ID.
- PUT `/product/:id`: Atualiza um produto existente pelo ID.
- DELETE `/product/:id`: Exclui um produto pelo ID.
- DELETE `/product/category`: Remove uma categoria do produto específico pelo ID.

### Categoria
- GET `/category/:id`: Retorna uma categoria específica pelo ID.
- GET `/categories`: Retorna todas as categorias com paginação.
- POST `/category`: Cria uma nova categoria.
- PUT `/category/:id`: Atualiza uma categoria existente pelo ID.
- DELETE `/category/:id`: Exclui uma categoria pelo ID.

### Pedido
- GET `/order/:id`: Retorna um pedido específico pelo ID.
- GET `/orders`: Retorna todos os pedidos com paginação.
- POST `/order`: Cria um novo pedido.
- DELETE `/order/:id`: Exclui um pedido pelo ID.
- PATCH `/order/status`: Atualiza o status de um pedido específico pelo ID.

### Carrinho
- GET `/cart/:id`: Retorna um carrinho específico pelo ID.
- GET `/carts`: Retorna todos os carrinhos com paginação.
- POST `/cart`: Cria um novo carrinho.
- PUT `/cart/:id`: Atualiza um carrinho existente pelo ID.
- DELETE `/cart/:id`: Exclui um carrinho pelo ID.

<!--
A fim de facilitar os testes, utilize o endereço da Documentação Swagger: `http://localhost:3000/docs/api-docs/`
-->
