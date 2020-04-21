import React from 'react';
import { Link } from 'react-router-dom';
import Starfish from '../assets/images/starfish2.png';

function Popup(props) {

    const { closePopup } = props;

    return (
        <div className="popup">
            <p>Product was added to a cart.
            <img src={Starfish} className="close-btn" onClick={() => closePopup()} alt="close button"></img>
            </p>
            <Link to="/"><p className="regular-btn">Continue shopping</p></Link>
            <Link to="/shopping-cart"><p className="regular-btn">Go to a cart</p></Link>
        </div>
    );
}

export default Popup;
