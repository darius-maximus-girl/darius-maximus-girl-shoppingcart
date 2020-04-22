import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import Wave from '../assets/images/single-wave.png';

function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar__logo">
                    <img className="logo" src={Logo} alt="logo"></img>
                    <p className="txt">phone</p>
                </div>
            </Link>
            <div className="navbar__links">
                <Link to="/">
                    <h3 className="link">products</h3>
                    {/* <img src={Wave}></img> */}
                </Link>
                <Link to="/">
                    <h3 className="link">about us</h3>
                </Link>
                <Link to="/shopping-cart">
                    <h3 className="link">my cart</h3>
                </Link>

            </div>
        </div>
    );
}

export default Navbar;