import React from "react";
import AddProduct from "../../components/Supplier/products/AddProduct";
import DisplayProducts from "../../components/Supplier/products/DisplayProducts";
import ManageProducts from "../../components/Supplier/products/ManageProducts";
const SupplierPage = () => {
    return (
        <div>
            <h1>Hello, Supplier!</h1>
            {/* <AddProduct/>
            <DisplayProducts/> */}

            <ManageProducts/>
        </div>
    );
};

export default SupplierPage;
