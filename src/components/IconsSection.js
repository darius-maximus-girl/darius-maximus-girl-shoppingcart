import React from 'react';
import Cart from '../assets/images/buying.png';
import Delivery from '../assets/images/delivery.png';
import Check from '../assets/images/check.png';
import Money from '../assets/images/money.png';

function IconsSection(props) {
    return (
        <section className="icons-container">
            <div className="icons-container__box">
                <img src={Delivery} alt="" className="icon" />
                <p className>Free delivery from 49$</p>
            </div>
            <div className="icons-container__box">
                <img src={Money} alt="" className="icon" />
                <p className="txt">30-day returns guarantee</p>
            </div>
            <div className="icons-container__box">
                <img src={Cart} alt="" className="icon" />
                <p className="txt">Safe shopping</p>
            </div>
            <div className="icons-container__box">
                <img src={Check} alt="" className="icon" />
                <p className="txt">2-year warranty</p>
            </div>
        </section>
    );
}

export default IconsSection;