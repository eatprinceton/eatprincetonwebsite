import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

const Card = (props) => {
	return (
		<a href={props.url} target="_blank">
			<div className="my-container column-dir between cardContainer">
				<div className="my-container column-dir">
					<img src={props.img} className="full-img cardImg" />
				</div>

				<h2>{props.title}</h2>
				<p className="cardInfo">{props.text}</p>
				{props.tags}
			</div>
		</a>
	);
};

// const styles = {
// 	titleText: {
// 		marginBottom: '0px'
// 	}
// }

export default Card;