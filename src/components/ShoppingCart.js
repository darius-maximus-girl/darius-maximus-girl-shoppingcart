import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './contexts/StoreContext';

function ShoppingCart(props) {

    const { store } = useContext(StoreContext);
    const items = store.productsInCart;

    return items.length ? (
        <div>
            <h3>Hello from Shopping Cart! Items in your cart: {items.length} </h3>
        </div>
    ) : (
            <div>
                Your cart is empty. Go to <Link to="/">products</Link>.
            </div>
        )

}

export default ShoppingCart;