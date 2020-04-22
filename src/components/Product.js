import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../components/contexts/StoreContext';
import { Link } from 'react-router-dom';
import Wave from '../assets/images/single-wave.png';

function Product({ phone }) {

    const soldOut = phone.inStock === 0 ? true : false;
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
                <h3 className="product-model">{phone.model} </h3>
                <img src={Wave} alt="waves" className="waves" />
                <p className="product-price">{phone.price}$</p>
                {!soldOut ? (
                    <p className="product-left">Only <span>{phone.inStock}</span> items left.</p>
                ) : (
                        <p>No items left.</p>
                    )
                }
            </Link>
            {!soldOut ? <button className={!isInCart && !soldOut ? "regular-btn" : "regular-btn btn-reverse"} onClick={() => handleOnclick()}>{isInCart ? "In a cart" : "Add to a cart"}</button> : ''
            }

            {soldOut ? <div className="product-soldout">sold out</div> : ''}
        </ div >
    );
}

export default Product;