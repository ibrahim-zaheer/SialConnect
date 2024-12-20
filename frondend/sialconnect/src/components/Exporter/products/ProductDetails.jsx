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
                <div className="card" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                    <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h1 className="card-title" style={{ flex: 1 }}>{product.name}</h1>
                            <img
                                src={product.image}
                                alt="Product"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                    marginLeft: '20px'
                                }}
                            />
                        </div>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text text-muted">Price: ${product.price}</p>
                        <p className="card-text">
                            Supplier: {product.supplier?.name || "Unknown"}
                        </p>
                        <p className="card-text">
                            Email Address: {product.supplier?.email || "Unknown"}
                        </p>
                        <p className="card-text">
                           Profile Picture: {product.supplier?.profilePicture || "Unknown"}
                        </p>
                        <p className="card-text">Created At: {new Date(product.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="card-img" style={{ marginLeft: '20px' }}>
                        {product.supplier?.profilePicture ? (
                            <img
                                src={product.supplier.profilePicture} // Profile picture URL
                                alt="Supplier Logo"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                }}
                            />
                        ) : (
                            <img
                                src="https://th.bing.com/th/id/OIP.mpXg7tyCFEecqgUsoW9eQwHaHk?w=206&h=210&c=7&r=0&o=5&pid=1.7" // A default image in case there's no profile picture
                                alt="Default Logo"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                }}
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-center">Loading product details...</div>
            )}
        </div>
    );
};

export default ProductDetails;
