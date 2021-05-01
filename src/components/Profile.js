import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

const Profile = (props) => {
	return (
		<a href={props.url} target="_blank"> 
			<div className="my-container column-dir between cardContainer">
				<div className="my-container column-dir">
					<img src={props.img} className="full-img cardImg" />
				</div>

				<h2>{props.name}</h2>
                <h5>Major: {props.major}</h5>
                <h5>{props.year}</h5>
				<p className="cardInfo">{props.text}</p>
				{/* <div className="my-container space">
					{props.tags.map((tag) => <Tag component={Tag} name={tag.name} />)}
				</div> */}
			
			</div>
		</a>
	);
};

// const styles = {
// 	titleText: {
// 		marginBottom: '0px'
// 	}
// }

export default Profile;