import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <Link to="/">
                <h3>products</h3>
            </Link>
            <Link to="/shopping-cart">
                <h3>my cart</h3>
            </Link>
        </div>
    );
}

export default Navbar;