import { Routes, Route } from "react-router-dom";
import { HomePage, ProductDetails, ProductList } from "../pages/index";

export const AllRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/product/:id" element={<ProductDetails />} />
        </Routes>
        </>
    );
}