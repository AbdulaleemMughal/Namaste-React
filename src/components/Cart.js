import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="text-center m-4 p-4">
            <div className="text-2xl font-bold">Cart</div>
            <button className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}> Clear Cart</button>

        {cartItems.length === 0 && <h1>Your cart is empty. Add Items to the cart</h1>}

            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;