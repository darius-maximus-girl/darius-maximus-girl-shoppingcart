import React from 'react';
import IconsSection from './IconsSection';
import People from '../assets/images/emotions.png';
import Heart from '../assets/images/heart.png';

function About(props) {
    return (
        <section class="about-container">
            <div className="info-container">
                <div className="info-container__box ">
                    <img src={People} alt="team" className="team"></img>
                </div>
                <div className="info-container__box ">
                    <h2 className="heading"><span>We are positive people in <span> <img src={Heart} alt="heart"></img></span> <br></br> with technology!</span></h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore, culpa dolorem asperiores, perspiciatis sit delectus excepturi nihil esse consequatur facere consectetur aperiam ipsam architecto reiciendis magnam provident. Facere veritatis sapiente earum enim consequatur temporibus dignissimos repudiandae nesciunt deleniti blanditiis. Reiciendis magnam eius libero ipsam incidunt alias et eligendi laudantium.</p>
                </div>
            </div>
            <IconsSection />
        </section>
    );
}

export default About;