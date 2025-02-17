import React from "react";

import { getCart } from "../Context/Cart";


const Cart = () => {
    const cart = getCart();

    const total = cart.items.reduce((a, b) => a + b.price, 0);

    
    return (
        <div className="cart" style={{border: "2px solid black", width:"250px", padding:"20px", fontSize: "larger"}}>
            {cart && cart.items.map((item) => <li>{item.name}</li>)}
            <h4>Total: Rs.{ total }</h4>
        </div>
    )
}

export default Cart;