import React, { useContext, useState } from 'react';
import { StoreContext } from './contexts/StoreContext';
import { Link } from 'react-router-dom';
import Popup from './Popup';

function ProductDetails(props) {

    const { store, dispatch } = useContext(StoreContext);
    const phone = store.productDetails;
    const isInCart = store.productsInCart.some(item => item.id === phone.id);
    const [showPopup, setShowPopup] = useState(false);

    const handleOnClick = () => {
        if (!isInCart) {
            dispatch({
                type: 'ADD_ITEM', item: {
                    model: phone.model,
                    img: phone.img,
                    price: phone.price,
                    id: phone.id,
                    inCart: phone.inCart,
                    inStock: phone.inStock,
                }, price: phone.price
            });
            dispatch({ type: 'DECREASE_STOCK_FROM_DETAILS', id: phone.id })
            setShowPopup(true);
        }
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <div className="details-container">
            <Link to="/"><p className="regular-btn go-back">Go back</p></Link>
            <div className="details">
                <img className="details-img" src={phone.img} alt="mobile phone"></img>
                <div className="details__desc">
                    <p className="details__desc-model">{phone.model}</p>
                    <p className="details__desc-description">{phone.description}</p>
                    <p className="details__desc-price">{phone.price}$</p>
                    <button className={!isInCart ? "regular-btn" : "regular-btn btn-reverse"} onClick={() => handleOnClick()}>{isInCart ? 'In a cart' : 'Add to a cart'}</button>
                </div>

            </div>
            {showPopup ? <Popup closePopup={closePopup} /> : ''}
        </div>
    );
}

export default ProductDetails;