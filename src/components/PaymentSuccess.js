import React from 'react';
import { Link } from 'react-router-dom';

function PaymentSuccess(props) {

    const handleOnclick = () => {
        console.log('SUCCESS BROTHER!')
    }

    return (
        <div className="payment-details">
            SUCCESS!!!!!!!!!!!!!!!!!!!! Go back to <Link to="/" >the shop!</Link>!
            If you want to download the summary of your order just click the button
            <button onClick={() => handleOnclick()}>Download</button>
        </div>
    );
}

export default PaymentSuccess;