import React, { useContext, useState } from 'react';
import { StoreContext } from '../components/contexts/StoreContext';

function Product({ phone }) {

    const { dispatch } = useContext(StoreContext);
    const [isInCart, setIsInCart] = useState(phone.inCart);
    console.log('is in cart?', isInCart);

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
            setIsInCart(true);
        }

    }

    return (
        <div className="product">
            <h3 className="product-model">{phone.model}</h3>
            <p className="product-price">{phone.price}</p>
            <img className="product-img" src={phone.img} alt="mobile phone"></img>
            <button className="regular-btn" onClick={() => handleOnclick()}>{isInCart ? 'Already in a cart' : 'Add to cart'}</button>
        </div>
    );
}

export default Product;