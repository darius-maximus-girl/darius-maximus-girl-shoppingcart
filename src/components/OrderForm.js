import React from 'react';

function OrderForm(props) {
    return (
        <div className="form-container">
            <form action="" className="form">
                <input type="text" className="form__input" placeholder="name" />
                <input type="text" className="form__input" placeholder="surname" />
                <input type="text" className="form__input" placeholder="phone number" />
                <input type="text" className="form__input" placeholder="email address" />
                <input type="text" className="form__input" placeholder="address" />
                <input type="text" className="form__input" placeholder="post code" />
                <button>PAY</button>
            </form>
        </div>
    );
}

export default OrderForm;