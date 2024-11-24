import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
const DisplayProducts = () => {
    const [products, setProducts] = useState([]);

    // Fetch all products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/supplier/product/readAllProducts"); // API endpoint for all products
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);
   

    return (
        <div className="container mt-4">
            <h1 className="text-center">All Products</h1>
            <div className="row">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product._id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                   
                                    <p className="card-text text-muted">Price: ${product.price}</p>
                                </div>
                                <div className="card-footer">
                                <Link 
                                        to={`/supplier/product/${product._id}`} 
                                        className="btn btn-primary"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products available.</p>
                )}
            </div>
        </div>
    );
};

export default DisplayProducts;
