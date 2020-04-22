import React, { useState, useEffect, useContext } from 'react';
import PaymentSuccess from './PaymentSuccess';
import { StoreContext } from '../components/contexts/StoreContext';
import Wave from '../assets/images/single-wave.png';

const initialData = {
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    address: '',
    postCode: '',
}

function OrderForm(props) {
    const { dispatch } = useContext(StoreContext);
    const [userData, setUserData] = useState(initialData);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        console.log(userData)
    }, [userData])

    const handleChange = (e) => {
        let value = e.target.value;

        setUserData({
            ...userData,
            [e.target.name]: value
        })
    }

    const onSubmit = () => {
        console.log('COOL');
        setSuccess(true);
        dispatch({ type: 'CLEAR_THE_CART' })
    }

    return !success ? (
        <div className="form-container">
            <img src={Wave} className="single-wave" alt="single wave"></img>
            <form onSubmit={onSubmit} className="form">
                <input onChange={e => handleChange(e)} type="text" className="form__input" name="name" value={userData.name} placeholder="name" required />
                <input onChange={e => handleChange(e)} type="text" className="form__input" name="surname" value={userData.surname} placeholder="surname" required />
                <input onChange={e => handleChange(e)} type="number" className="form__input" name="phoneNumber" value={userData.phoneNumber} placeholder="phone number" />
                <input onChange={e => handleChange(e)} type="email" className="form__input" name="email" value={userData.email} placeholder="email address" required />
                <input onChange={e => handleChange(e)} type="text" className="form__input" name="address" value={userData.address} placeholder="address" required />
                <input onChange={e => handleChange(e)} type="text" className="form__input" name="postCode" value={userData.postCode} placeholder="post code" required />
                <button className="regular-btn">PAY</button>
            </form>
        </div>
    ) : (
            <PaymentSuccess />
        );
}

export default OrderForm;