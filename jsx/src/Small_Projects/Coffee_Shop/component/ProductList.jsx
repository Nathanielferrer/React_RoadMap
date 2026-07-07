import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductList.css';

export default function ProductList({ products }) {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="product-list-container">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>₱{product.price.toFixed(2)}</p>
                    <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
                        Add to Cart
                    </button>
                </div>
            ))}
            {products.length === 0 && <p>No products found.</p>}
        </div>
    )
}
