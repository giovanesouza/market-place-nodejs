const router = require("express").Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido, validaIdParams } = require("../middleware/validacao.middleware");


router.get("/find/:id", authMiddleware, validaIdParams, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidosController);

router.post("/create", authMiddleware, validaPedido, pedidoController.createPedidoController);

router.delete("/delete/:id", authMiddleware, validaIdParams, pedidoController.deletePedidoController);

router.patch("/updateStatus/:id", authMiddleware, validaIdParams, pedidoController.updateStatusPedidoController);

module.exports = router;