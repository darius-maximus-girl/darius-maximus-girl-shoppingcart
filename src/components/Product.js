import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../components/contexts/StoreContext';
import { Link } from 'react-router-dom';

function Product({ phone }) {

    const [soldOut, setSoldOut] = useState(phone.inStock === 0 ? true : false);
    const { dispatch, store } = useContext(StoreContext);
    const isInCart = store.productsInCart.some(item => item.id === phone.id);

    const setProductDetails = () => {
        dispatch({
            type: 'SET_PRODUCT_DETAILS', details: {
                model: phone.model,
                img: phone.img,
                price: phone.price,
                id: phone.id,
                inCart: phone.inCart,
                inStock: phone.inStock,
                description: phone.description
            }
        });
    }

    const handleOnclick = () => {
        if (!isInCart) {
            dispatch({
                type: 'ADD_ITEM', item: {
                    model: phone.model,
                    img: phone.img,
                    price: phone.price,
                    id: phone.id,
                    inCart: phone.inCart,
                    inStock: phone.inStock,
                }, id: phone.id, price: phone.price
            });
        }
    }

    return (
        <div className="product" onClick={() => setProductDetails()}>
            <Link to="/product-details">
                <div className="product-img">
                    <img src={phone.img} alt="mobile phone"></img>
                </div>
                <h3 className="product-model">{phone.model}</h3>
                <p className="product-price">{phone.price}$</p>
                <p className="product-left">Only <span>{phone.inStock}</span> items left.</p>
            </Link>
            <button className={!isInCart ? "regular-btn" : "regular-btn btn-reverse"} onClick={() => handleOnclick()}>{isInCart ? "In a cart" : "Add to a cart"}</button>
            {soldOut ? <div className="product-soldout">SOLD OUT</div> : ''}
        </ div >
    );
}

export default Product;