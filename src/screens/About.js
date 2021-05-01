import React from 'react';
import '../style.css';

import Colors from '../colors';

import Header from '../components/Header';
import Footer from '../components/Footer';
import People from '../screens/ss';

const About = () => (
    <div className="center-text">
		<Header solid={true} />
        <div className="about1">
            <div className= 'aboutText' style={{ color: Colors.white }}>Princeton Tigers supporting Princeton Businesses.</div>
        </div>
        <div className="whiteBox">
            <h1 className= 'section-heading'>Our Story</h1>
            <h3 className= 'aboutSubtext'>We are a student group dedicated to making a difference in the Princeton community by supporting local businesses.</h3>
        </div>
        <div className="about2">
            <div className= 'aboutText' style={{ color: Colors.white }}>This project is our way of highlighting the diversity of local Princeton restaurants in the community.</div>
        </div>
        <div style={{ backgroundColor: 'white'}}>
            <h1 className= 'top section-heading' style={{ backgroundColor: 'white'}} >About Us</h1>
            <h3 className= 'aboutSubtext'>change this</h3>
            <People/>        
        </div>
        <Footer/>
    </div>
);

export default About;