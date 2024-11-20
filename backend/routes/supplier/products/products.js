// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/productController");
const authenticateMiddleware = require("../../../middleware/authMiddleware")


// router.get("/read", authenticateMiddleware, productController.getProductsBySupplier);

// router.get("/create", authenticateMiddleware, productController.createProduct);

// router.get("/update", authenticateMiddleware, productController.updateProduct);

// router.get("/delete", authenticateMiddleware, productController.deleteProduct);


router.get("/read", authenticateMiddleware, productController.getProductsBySupplier);
router.post("/create", authenticateMiddleware, productController.createProduct);
router.put("/update/:id", authenticateMiddleware, productController.updateProduct);
router.delete("/delete/:id", authenticateMiddleware, productController.deleteProduct);

module.exports = router;