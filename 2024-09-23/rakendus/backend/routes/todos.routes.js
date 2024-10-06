const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");
const {
  todosRouteMiddleware,
  todosGetRouteMiddleware,
} = require("../middlewares/todos.middlewares");

router.use(todosRouteMiddleware);

router.get("/", todosGetRouteMiddleware, todosController.read);
router.post("/", todosController.create);
router.put("/", todosController.update);
router.delete("/:id", todosController.delete);

router.get("/generate-token", todosController.generateToken); // GET http://localhost:8080/todos/generate-token?name=Kryslin
router.post("/verify-token", todosController.verifyToken);
module.exports = router;
