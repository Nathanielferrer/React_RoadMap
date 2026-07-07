import { UserContext } from "./context/UserContext"
import Navbar from "./component/navbar";
import { useState } from 'react';
import SearchBar from "./component/SearchBar";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import { CartProvider } from "./context/CartContext";

function CoffeeShopApp() {
    const [search, setSearch] = useState('')
    const user = "Nathaniel";

    const products = [
        {
            id: 1,
            name: 'Cappuccino',
            price: 105
        }, {
            id: 2,
            name: 'Americano',
            price: 100,
        }, {
            id: 3,
            name: 'Latte',
            price: 125,
        },
    ];

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <CartProvider>
            <UserContext.Provider value={user}>
                <Navbar />
            </UserContext.Provider>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <ProductList
                products={filteredProducts}
            />

            <Cart />
        </CartProvider>
    )
}

export default CoffeeShopApp;
