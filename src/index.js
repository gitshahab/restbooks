import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import { App } from "./App";
import { ScrollToTop } from "./components";
import { CartProvider, FilterProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode >
        <Router>
            <CartProvider>
                <FilterProvider >
                    <ScrollToTop />
                    <ToastContainer position="top-center" />
                    <App />
                </FilterProvider>
            </CartProvider>
        </Router>
    </React.StrictMode>
);