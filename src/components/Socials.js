import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

const Socials = (props) => {
	const styles = {
		icon: {
			color: props.color,
			borderColor: props.color
		},
		email: {
			fontSize: '18px',
			color: props.color,
			borderColor: props.color
		}
	};
	return (
		<div className="my-container space">
			<a href="https://www.linkedin.com/company/tigers-for-nassau/" style={styles.icon} class="fa fa-linkedin"/>
			<a href="" style={styles.icon} class="fa fa-twitter" />
			<a href="https://github.com/eatprinceton/eatprincetonwebsite" style={styles.icon} class="fa fa-github" />
			<a
				href="https://www.facebook.com/tigersfornassau"
				style={styles.icon}
				class="fa fa-facebook"
			/>
		</div>
	);
};

export default Socials;