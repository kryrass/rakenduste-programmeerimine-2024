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

module.exports = router;
