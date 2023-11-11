const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');

const authMiddleware = require('../middleware/auth.middleware');
const { validaUsuario, validaIdParams } = require('../middleware/validacao.middleware');
const paginacao = require("../middleware/paginacao.middleware");

// Rotas GET
router.get('/findById/:id', authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersController);

// Rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAddress/:id', authMiddleware, validaIdParams, usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', authMiddleware, validaIdParams, usuarioController.addUserFavProductController);

// Rotas PUT
router.put('/update/:id', authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

// Rotas DELETE
router.delete('/remove/:id', authMiddleware, validaIdParams, usuarioController.removeUserController);
router.delete('/removeAddress', authMiddleware, usuarioController.removeUserAddressController);
router.delete('/removeFavProduct/:id', authMiddleware, validaIdParams, usuarioController.removeUserFavProductController);


module.exports = router;