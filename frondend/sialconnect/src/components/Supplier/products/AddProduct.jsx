import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
    });

    const [message, setMessage] = useState(""); // Success/Error message
    const [loading, setLoading] = useState(false); // For loading state

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const token = localStorage.getItem("token"); // Fetch token from local storage
            const response = await axios.post(
                "/supplier/product/create",
                formData, // Send formData directly as JSON
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Pass token for authentication
                    },
                }
            );

            setMessage("Product created successfully!");
            setFormData({ name: "", description: "", price: "" }); // Reset form
        } catch (error) {
            console.error("Error creating product:", error.response?.data || error.message);
            setMessage(error.response?.data?.message || "Failed to create product. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Add Product"}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddProduct;

