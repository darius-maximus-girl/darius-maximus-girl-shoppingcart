import React, { useContext, useState } from 'react';
import { StoreContext } from './contexts/StoreContext';
import { Link } from 'react-router-dom';
import Popup from './Popup';

function ProductDetails(props) {

    const { store, dispatch } = useContext(StoreContext);
    const phone = store.productDetails;
    const isInCart = store.productsInCart.some(item => item.id === phone.id);
    const [showPopup, setShowPopup] = useState(false);
    //After adding to a cart there should be a popup asking if I want to continue shopping (Link to '/') or go back to a cart (/shopping-cart)? 

    const handleOnClick = () => {
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
            setShowPopup(true)
        }
    }

    return (
        <div className="details-container">
            <h3>Hello from Product Details</h3>
            <Link to="/"><p>Go back</p></Link>
            <div className="details">
                <p className="details-model">{phone.model}</p>
                <img className="details-img" src={phone.img} alt="mobile phone"></img>
                <p className="details-description">{phone.description}</p>
                <button className="regular-btn" onClick={() => handleOnClick()}>{isInCart ? 'In a cart' : 'Add to a cart'}</button>
            </div>
            {showPopup ? <Popup /> : ''}
        </div>
    );
}

export default ProductDetails;