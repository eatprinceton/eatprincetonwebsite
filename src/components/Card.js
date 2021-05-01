import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

import Tag from './Tag';

const Card = (props) => {
	return (
		<a href={props.url} target="_blank">
			<div className="my-container column-dir between cardContainer">
				<div className="my-container column-dir">
					<img src={props.img} className="full-img cardImg" />
				</div>

				<h2>{props.title}</h2>
				<p className="cardInfo">{props.text}</p>
				{/* <div className="my-container space">
					{props.tags.map((tag) => <Tag component={Tag} name={tag.name} />)}
				</div> */}
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