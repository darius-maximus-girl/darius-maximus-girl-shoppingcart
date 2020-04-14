import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './contexts/StoreContext';

function ShoppingCart(props) {

    const { userProducts } = useContext(StoreContext);

    return userProducts.length ? (
        <div>
            <h3>Hello from Shopping Cart! Items in your cart: {userProducts.length} </h3>
        </div>
    ) : (
            <div>
                Your cart is empty. Go to <Link to="/">products</Link>.
            </div>
        )

}

export default ShoppingCart;