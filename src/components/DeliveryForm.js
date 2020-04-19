import React, { useContext, useState } from 'react';
// import { deliveryOptions } from './productsDB';
import { StoreContext } from './contexts/StoreContext';

function DeliveryForm(props) {

    const { store, dispatch } = useContext(StoreContext);
    const [currentDeliveryPrice, setCurrentDeliveryPrice] = useState(0);

    const handleCheckbox = (id, price) => {
        console.log('HELLO', id);
        dispatch({ type: 'CHOOSE_DELIVERY', id, price, currentDeliveryPrice });
        setCurrentDeliveryPrice(price);
    }

    return (
        <div className="delivery-form">
            <ul className="delivery-form__options">
                {store.deliveryOptions.map(option => {
                    return (
                        <li className="delivery-option" onClick={() => handleCheckbox(option.id, option.price)}>
                            <label className="checkbox-container">
                                <input type="checkbox" checked={option.checked}></input>
                                <span className="checkmark"></span>
                                <p>{option.form} <span>{option.price}$</span></p>
                            </label>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default DeliveryForm;