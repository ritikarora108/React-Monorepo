import React from "react";
import { createRoot } from "react-dom/client"
import CartApp from "./CartApp.jsx"
import {CartProvider} from "./Context/Cart.jsx"

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CartProvider>
            <CartApp />
        </CartProvider>
    </React.StrictMode>
)