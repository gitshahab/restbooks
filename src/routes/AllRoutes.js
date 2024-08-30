import { Routes, Route } from "react-router-dom";
import { HomePage, Login, ProductDetails, ProductList, Register, Search } from "../pages/index";

export const AllRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/product/:id" element={<ProductDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        </>
    );
}