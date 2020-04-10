import React, { useContext } from 'react';
import { StoreContext } from './contexts/StoreContext';

function ShoppingCart(props) {

    const { userProducts } = useContext(StoreContext);

    return (
        <div>
            <h3>Hello from Shopping Cart! Items in your cart: {userProducts.length} </h3>
        </div>
    );
}

export default ShoppingCart;