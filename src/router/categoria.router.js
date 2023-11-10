const router = require("express").Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCategoria, validaIdParams } = require("../middleware/validacao.middleware");



router.get("/find/:id", authMiddleware, validaIdParams, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);

router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);

router.put("/update/:id", authMiddleware, validaIdParams, validaCategoria, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, validaIdParams, categoriaController.deleteCategoriaController);

module.exports = router;