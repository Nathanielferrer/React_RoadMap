import React from 'react';
import useCartStore from './cartStore';
import './styles.css';

function Navbar() {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="navbar">
      <h2>Zustand Shop</h2>
      <div className="cart-indicator">
        🛒 Cart: {cart.length}
      </div>
    </nav>
  );
}

export default Navbar;
