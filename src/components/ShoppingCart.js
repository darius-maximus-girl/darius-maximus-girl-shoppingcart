import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './contexts/StoreContext';
import ProductInCart from './ProductInCart';

function ShoppingCart(props) {

    const { store } = useContext(StoreContext);
    // const items = store.productsInCart;

    return store.productsInCart.length ? (
        <div className="cart-container">
            <h3 className="cart-container__msg">Hello from Shopping Cart! Items in your cart: {store.productsInCart.length} </h3>
            <ul className="cart-container__items">
                {store.productsInCart.map(item => {
                    return <ProductInCart key={item.id} item={item} />
                })}
            </ul>
            {/* TASK FOR TODAY: PAYMENT DETAILS AND ORDER FORM*/}
        </div>
    ) : (
            <div className="cart-container">
                Your cart is empty. Go to <Link to="/">products</Link>.
            </div>
        )
}

export default ShoppingCart;