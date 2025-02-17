import Item from "./Components/item.jsx";
import Cart from "./Components/Cart.jsx";

function CartApp() {
    return (
        <div className="cart-app">
            <div style={{display: "flex"}}>
                <Item name="MacBook Pro" price={100000} />
                <Item name="Pendrive" price={2000} />
                <Item name="Mobile" price={25000} />
            </div>
            <h1>Cart</h1>
            <Cart/>
            
        </div>
    )
}

export default CartApp;