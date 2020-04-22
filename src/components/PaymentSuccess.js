import React from 'react';
import { Link } from 'react-router-dom';

function PaymentSuccess(props) {

    const handleOnclick = () => {
        console.log('SUCCESS BROTHER!')
    }

    return (
        <div className="payment-details">
            <p className="payment-details__msg">SUCCESS!</p>
            <p className="payment-details__txt">Go back to <Link to="/" >the shop!</Link> 
            If you want to download the summary of your order just click the button below:</p>
            <button className=" regular-btn payment-details__btn" onClick={() => handleOnclick()}>Download</button>
        </div>
    );
}

export default PaymentSuccess;