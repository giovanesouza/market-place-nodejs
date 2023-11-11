const router = require("express").Router();

const swaggetUi = require("swagger-ui-express"); // Interface do swagger
const swaggerDocument = require("../../swagger.json"); // Documentação swagger.json (está na raíz do projeto)

router.use("/api-docs", swaggetUi.serve); // Rota onde a documentação vai funcionar
router.get("/api-docs", swaggetUi.setup(swaggerDocument)); // Ao chamar a rota, pega as configurações do documento

module.exports = router;