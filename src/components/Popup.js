import React from 'react';
import { Link } from 'react-router-dom';

function Popup(props) {
    return (
        <div className="popup">
            <p>Product was added to a cart.</p>
            <Link to="/"><p>Continue shopping</p></Link>
            <Link to="/shopping-cart"><p>Go to a cart</p></Link>
        </div>
    );
}

export default Popup;
