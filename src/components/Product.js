import React, { useContext, useState } from 'react';
import { StoreContext } from '../components/contexts/StoreContext';

function Product({ phone }) {

    const { dispatch, userProducts } = useContext(StoreContext);
    const isInAcart = userProducts.some(item => item.id === phone.id);

    return (
        <div className="product">
            <h3 className="product-model">{phone.model}</h3>
            <p className="product-price">{phone.price}</p>
            <img className="product-img" src={phone.img} alt="mobile phone"></img>
            <button className="regular-btn" onClick={() => dispatch({
                type: 'ADD_ITEM', item: {
                    id: phone.id,
                    model: phone.model,
                    price: phone.price,
                    img: phone.img,
                    inStock: phone.inStock
                }
            })}>{isInAcart ? 'Already in a cart' : 'Add to cart'}</button>
        </div>
    );
}

export default Product;