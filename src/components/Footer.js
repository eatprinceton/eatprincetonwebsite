import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

import Socials from './Socials';

const Footer = () => {
	return (
		<div style={{ backgroundColor: Colors.white }}>
			{/* <img src={dottech} style={styles.dottech} /> */}
			<div className="my-container  column-dir space" style={styles.footer}>
				<div>
					<p>Created by the Tigers For Nassau Tech Team</p>
				</div>

				<Socials color={Colors.black} />
			</div>
		</div>
	);
};

const styles = {
	footer: {
		backgroundColor: Colors.white,
		height: '130px',
		color: Colors.black,
		padding: '5%'
	}
};

export default Footer;