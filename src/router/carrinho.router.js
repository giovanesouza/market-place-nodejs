const router = require("express").Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCarrinho, validaIdParams } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, validaIdParams, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhosService);

router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoService);

router.put("/update/:id", authMiddleware, validaIdParams, validaCarrinho, carrinhoController.updateCarrinhoService);

router.delete("/delete/:id", authMiddleware, validaIdParams, carrinhoController.deleteCarrinhoService);

module.exports = router;