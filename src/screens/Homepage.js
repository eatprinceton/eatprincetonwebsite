import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Tag from '../components/Tag';
import Card from '../components/Card';


/* Images */
import princeton from '../images/princeton.jpg';
import pj from '../images/pj_pancake.jpg';

const Homepage = () => (
	<div className="center-text">
		<Header solid={false} />

        <div className="sectionBackground">
			{/************* Restaurants *********************/}
			<h1 className ="section-title" color= 'white'>Restaurants</h1>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="PJ's Pancake House"
						img={pj}
						url="http://www.pancakes.com/"
						text="Bustling all-day spot known for its signature pancakes & other breakfast food, plus outdoor seating, 
						9am-7pm M-F, 8am-7pm Sat & Sun"
						tags={
							<div className="my-container space">
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Dine-In" color={Colors.deliveryTag} />
							</div>
						}
					/>
				</Col>
                <Col lg={4}>
					<Card
						title="Restaurant"
						img={pj}
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
						img={pj}
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
						img={pj}
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
						img={pj}
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
			<Row style={styles.projectRow}>
            <Col lg={4}>
					<Card
						title="Restaurant"
						img={pj}
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
			<Row style={styles.projectRow}>
            <Col lg={4}>
					<Card
						title="Restaurant"
						img={pj}
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
			<Row style={styles.projectRow}>
            <Col lg={4}>
					<Card
						title="7-Eleven"
						img={pj}
						url="https://www.7-eleven.com/locations/nj/princeton/259-nassau-st-36995"
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
						title="A Little Taste of Cuba"
						img={princeton}
						url="https://cubacigar.com/"
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
						title="Agricola"
						img={princeton}
						url="https://www.agricolaeatery.com/"
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
    
