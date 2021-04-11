import React from 'react';
import '../style.css';


import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = () => (
    <div className="center-text">
		<Header solid={false} />
        <div className="sectionBackgroundHome heroContainer">
            <br/>
            <h1 className="heroText">EatPrinceton</h1>
            <br/>
            <br/>
            <h6 className="heroSubtext">Created by Princeton students to help the <br></br>Princeton community support local restaurants</h6>
        </div>
        <Footer/>
    </div>
);

export default Homepage;