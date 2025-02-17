import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const getCart = () => {
    const cart = useContext(CartContext);
    return cart;
}

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}