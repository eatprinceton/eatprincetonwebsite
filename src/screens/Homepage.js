import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Tag from '../components/Tag';
import Card from '../components/Card';
import ecoeatGif from '../images/ecoeat.gif';
import princeton from '../images/princeton.jpg';

const Homepage = () => (
	<div className="center-text">
		<Header solid={false} />

        <div className="section">
			{/************* Restaurants *********************/}
			<h1 className="section-title">Restaurants</h1>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Restaurant"
						img={princeton}
						url="https://www.tigersfornassau.com/"
						text="This is where we eat eat eat eat eat eat, 5-9pm"
						tags={
							<div className="my-container space">
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
                                <Tag name="Mexican" color={Colors.mexicanTag} />
							</div>
						}
					/>
				</Col>
                <Col lg={4}>
					<Card
						title="Restaurant"
						img={ecoeatGif}
						url="https://www.tigersfornassau.com/"
						text="This is where we eat eat eat eat eat eat, 5-9pm"
						tags={
							<div className="my-container space">
								<Tag name="Yum" color={Colors.yumTag} />
								<Tag name="Asian" color={Colors.asianTag} />
                                <Tag name="Delivery" color={Colors.deliveryTag} />
							</div>
						}
					/>
				</Col>
                <Col lg={4}>
					<Card
						title="Restaurant"
						img={ecoeatGif}
						url="https://www.tigersfornassau.com/"
						text="This is where we eat eat eat eat eat eat, 5-9pm"
						tags={
							<div className="my-container space">
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
                                <Tag name="Mexican" color={Colors.mexicanTag} />
							</div>
						}
					/>
				</Col>
            </Row>
            <Row style={styles.projectRow}>
            <Col lg={4}>
					<Card
						title="Restaurant"
						img={ecoeatGif}
						url="https://www.tigersfornassau.com/"
						text="This is where we eat eat eat eat eat eat, 5-9pm"
						tags={
							<div className="my-container space">
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
                                <Tag name="Mexican" color={Colors.mexicanTag} />
							</div>
						}
					/>
				</Col>
                <Col lg={4}>
					<Card
						title="Restaurant"
						img={princeton}
						url="https://www.tigersfornassau.com/"
						text="This is where we eat eat eat eat eat eat, 5-9pm"
						tags={
							<div className="my-container space">
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
                                <Tag name="Mexican" color={Colors.mexicanTag} />
							</div>
						}
					/>
				</Col>
            </Row>
        </div>
    </div>
);

const styles = {
	projectRow: {
		marginBottom: '50px'
	}
};

export default Homepage;
    
