import React from 'react';
import useCartStore from './cartStore';
import './styles.css';

function Product() {
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAdd = () => {
        addToCart({ id: 1, name: 'Awesome Gadget', price: 99.99 });
    };

    return (
        <div className="product-container">
            <div className="product-card">
                <h3>Awesome Gadget</h3>
                <p>Price: $99.99</p>
                <div className="button-group">
                    <button 
                        onClick={handleAdd} 
                        className="btn btn-add"
                        style={{ width: '100%' }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
