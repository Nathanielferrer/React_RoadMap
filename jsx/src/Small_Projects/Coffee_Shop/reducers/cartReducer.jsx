export const initialState = {
    items: [],   // This is the cart list (empty at start)
    total: 0     // This is the total price (0 at start)
};

export function cartReducer(state, action) {

    // action = instruction sent from dispatch()
    // state = current cart data

    switch (action.type) {

        // =========================
        // ADD ITEM TO CART
        // =========================
        case "ADD_ITEM": {

            // Copy old items and add new item (payload)
            const newItems = [...state.items, action.payload];

            // Calculate total price of all items
            const newTotal = newItems.reduce(
                (sum, item) => {
                    // sum = running total / initial value which is 0 
                    // item = each product in array
                    return sum + item.price;
                },
                0 // starting value of sum
            );

            // Return updated state (React needs NEW object)
            return {
                ...state,         // keep other state values (safe practice)
                items: newItems,  // updated cart items
                total: newTotal   // updated total price
            };
        }

        // =========================
        // REMOVE ITEM FROM CART
        // =========================
        case "REMOVE_ITEM": {

            // Remove item by index
            const filteredItems = state.items.filter(
                (item, index) => {
                    // keep all items except the one clicked
                    return index !== action.payload;    //if the i is not equal to product number (index) return true to keep the product and if it is equal return false to delete the product
                }
            );

            // Recalculate total after removal
            const newTotal = filteredItems.reduce(
                (sum, item) => {
                    return sum + item.price;
                },
                0
            );

            // Return updated state
            return {
                ...state,
                items: filteredItems,
                total: newTotal
            };
        }

        // =========================
        // CLEAR CART
        // =========================
        case "CLEAR_CART":
            // Reset everything back to initial values
            return initialState;

        // =========================
        // DEFAULT CASE
        // =========================
        default:
            // If action type is unknown, do nothing
            return state;
    }
}