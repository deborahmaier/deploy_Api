const express = require("express");
const route = express.Router();

const ProductsController = require("../controllers/productsController");

route.get("/", ProductsController.getAllProduct);

route.get("/:id", ProductsController.getProductById);

route.post("/",  ProductsController.createProduct);

route.put("/:id",  ProductsController.updateProductById);

route.delete("/:id", ProductsController.deleteProductById);

module.exports = route;