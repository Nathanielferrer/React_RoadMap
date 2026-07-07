import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {

    // Get cart data (state) and actions (dispatch)
    const { state, dispatch } = useContext(CartContext);

    return (
        <div>

            {/* Cart title */}
            <h2>🛒 Cart</h2>

            {/* If cart is empty */}
            {state.items.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                // Loop through all items in cart
                state.items.map((item, index) => (
                    <div key={index}>

                        {/* Show product name and price */}
                        <p>
                            {item.name} - ₱{item.price}
                        </p>

                        {/* Remove button */}
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_ITEM", // tell reducer what to do
                                    payload: index      // send index of item to remove
                                })
                            }
                        >
                            Remove
                        </button>

                    </div>
                ))
            )}

            <hr />

            {/* Show total price */}
            <h3>Total: ₱{state.total}</h3>

            {/* Clear cart button */}
            <button
                onClick={() =>
                    dispatch({
                        type: "CLEAR_CART"
                    })
                }
            >
                Clear Cart
            </button>

        </div>
    );
}