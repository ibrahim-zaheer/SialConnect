const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the Supplier
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", ProductSchema);
