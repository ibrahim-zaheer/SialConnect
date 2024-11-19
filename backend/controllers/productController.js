const Product = require("../models/Product");
const User = require("../models/user");

// Create a Product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        // Check if the logged-in user is a supplier
        if (req.user.role !== "supplier") {
            return res.status(403).json({ message: "Only suppliers can create products." });
        }

        const product = new Product({
            name,
            description,
            price,
            supplier: req.user.id, // Assign the product to the logged-in supplier
        });

        await product.save();
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Product ID
        const { name, description, price } = req.body;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        // Ensure the logged-in supplier owns the product
        if (product.supplier.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to update this product." });
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;

        await product.save();
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Product
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        // Ensure the logged-in supplier owns the product
        if (product.supplier.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to delete this product." });
        }

        await product.remove();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getProductsBySupplier = async (req, res) => {
    try {
        if (req.user.role !== "supplier") {
            return res.status(403).json({ message: "Only suppliers can view their products." });
        }

        const products = await Product.find({ supplier: req.user.id });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this supplier." });
        }

        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};