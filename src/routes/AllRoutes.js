import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage, Login, ProductDetails, ProductList, Register, Search, OrderPage } from "../pages/index";
import { ProtectedRoute } from "./ProtectedRoute";

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
            <Route path="/cartpage" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        </Routes>
        </>
    );
}