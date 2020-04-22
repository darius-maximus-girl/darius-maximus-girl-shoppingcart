import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './contexts/StoreContext';
import ProductInCart from './ProductInCart';
import DeliveryForm from './DeliveryForm';
import Wave from '../assets/images/single-wave.png';

function ShoppingCart(props) {

    const { store } = useContext(StoreContext);

    //I think I gotta do smth like 
    const summariseShoppingCart = () => {
        console.log('SUMMARY')
    }

    return store.productsInCart.length ? (
        <div className="cart-container">
            <ul className="cart-container__items">
                {store.productsInCart.map(item => {
                    return <ProductInCart key={item.id} item={item} />
                })}
            </ul>
            <div className="cart-container__summary">
                <DeliveryForm />
                <div className="summary">
                    <img className="waves" src={Wave} alt="wave"></img>
                    <p>In total <span className="total">{store.totalPrice.toFixed(2)}$</span></p>
                    <Link to="/order-form"><div className="regular-btn" onClick={() => summariseShoppingCart()}>Next</div></Link>
                </div>
            </div>
        </div>
    ) : (
            <div className="cart-container">
                Your cart is empty. Go to <Link to="/">products</Link>.
            </div>
        )
}

export default ShoppingCart;