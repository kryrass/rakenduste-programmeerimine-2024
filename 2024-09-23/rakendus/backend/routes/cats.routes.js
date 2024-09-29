const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/", catsController.create);
router.put("/", catsController.update); 
router.delete("/:id", catsController.delete);

module.exports = router;