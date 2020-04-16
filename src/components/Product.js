import React, { useContext } from 'react';
import { StoreContext } from '../components/contexts/StoreContext';
import { Link } from 'react-router-dom';

function Product({ phone }) {

    const { dispatch, store } = useContext(StoreContext);
    const isInCart = store.productsInCart.some(item => item.id === phone.id);
    console.log('is in the cart?', isInCart);

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
                    inStock: phone.inStock,
                }
            });
        }
    }

    return (

        <div className="product" onClick={() => setProductDetails()}>
            <Link to="/product-details">
                <h3 className="product-model">{phone.model}</h3>
                <p className="product-price">{phone.price}</p>
                <img className="product-img" src={phone.img} alt="mobile phone"></img>
            </Link>
            <button className="regular-btn" onClick={() => handleOnclick()}>{isInCart ? 'Already in a cart' : 'Add to cart'}</button>
        </ div >
    );
}

export default Product;