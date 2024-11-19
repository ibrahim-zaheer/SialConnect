// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");



router.get("/read", authenticateMiddleware, productController.getProductsBySupplier);

router.get("/create", authenticateMiddleware, productController.createProduct);

router.get("/update", authenticateMiddleware, productController.updateProduct);

router.get("/delete", authenticateMiddleware, productController.deleteProduct);


module.exports = router;