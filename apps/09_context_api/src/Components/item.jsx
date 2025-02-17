import "./item.css"
import { getCart } from "../Context/Cart.jsx";

function Item(props) {
    const cart = getCart();
    return (
        <div className="item-container">
            <div className="item">
                <h2>{props.name}</h2>
                <h4>Price: Rs.{props.price}</h4>
                <button onClick={() => {
                    cart.setItems([...cart.items, { name: props.name, price: props.price }]);
                }}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Item;