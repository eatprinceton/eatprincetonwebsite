import React from 'react';
import '../style.css';

import Colors from '../colors';

import Header from '../components/Header';
import Footer from '../components/Footer'; 

import Anthony from '../people/anthony.jpg';
import Tanvi from '../people/tanvi.jpg';
import Vicky from '../people/vicky.jpg'
    
const About = () => (
    <div className="center-text">
		<Header solid={false} />

		<div className="sectionBackground">
			{/************* Restaurants *********************/}
			<h1 className="section-title">Restaurants</h1>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Anthony"
						img={Anthony}
						text="DESC"
					/>
				</Col>

				<Col lg={4}>
					<Card
						title="Tanvi"
						img={Tanvi}
						text="DESC"
					/>
				</Col>

				<Col lg={4}>
					<Card
						title="Vicky"
						img={Vicky}
						text="DESC"
					/>
				</Col>
			</Row>
		</div>
		<Footer/>
	</div>
);

export default About;