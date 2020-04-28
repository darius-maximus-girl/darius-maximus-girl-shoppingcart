import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Download from './Download';
import { StoreContext } from './contexts/StoreContext';

function PaymentSuccess(props) {

    const { store, dispatch } = useContext(StoreContext);

    const handleOnClick = () => {
        dispatch({ type: 'CLEAR_THE_CART' })
    }

    return (
        <div className="payment-details">
            <p className="payment-details__msg">SUCCESS!</p>
            <p className="payment-details__txt">Go back to <Link to="/" onClick={() => handleOnClick()} >the shop!</Link>
            If you want to download the summary of your order just click the button below:</p>
            <div className="btn-wrapper">
                <Download />
            </div>
        </div>
    );
}

export default PaymentSuccess;