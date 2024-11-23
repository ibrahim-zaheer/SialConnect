import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");

    // Fetch product details
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`/supplier/product/${id}`); // API endpoint for fetching a product by ID
                setProduct(response.data);
            } catch (err) {
                setError("Error fetching product details.");
                console.error("Error fetching product details:", err);
            }
        };
        fetchProductDetails();
    }, [id]);

    if (error) {
        return <div className="container mt-4 text-center">{error}</div>;
    }

    return (
        <div className="container mt-4">
            {product ? (
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">{product.name}</h1>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text text-muted">Price: ${product.price}</p>
                        <p className="card-text">
                            Supplier: {product.supplier?.name || "Unknown"}
                        </p>
                        <p className="card-text">Created At: {new Date(product.createdAt).toLocaleString()}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center">Loading product details...</div>
            )}
        </div>
    );
};

export default ProductDetails;
