import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Tag from '../components/Tag';
import Card from '../components/Card';


import	Agricola	from '../images/princeton.jpg';		
import	AjitenJapanese	from '../images/princeton.jpg';		
import	AlchemistandBarrister	from '../images/princeton.jpg';		
import	ArleesRawBlends	from '../images/princeton.jpg';		
import	BentSpoonArtisanIceCreamandBakery	from '../images/princeton.jpg';		
import	BluePointGrill	from '../images/princeton.jpg';		
import	CaféVienna	from '../images/princeton.jpg';		
import	ChapinGuatamaleanCuisine	from '../images/princeton.jpg';		
import	ChenaiChimeny	from '../images/princeton.jpg';		
import	ChezAliceGourmetCaféBakery	from '../images/princeton.jpg';		
import	ChucksSpringStCafé	from '../images/princeton.jpg';		
import	ContesPizza	from '../images/princeton.jpg';		
import	DAngelos	from '../images/princeton.jpg';		
import	DinkyBarKitchen	from '../images/princeton.jpg';		
import	DunkinDonuts	from '../images/princeton.jpg';		
import	EFESMediterranean	from '../images/princeton.jpg';		
import	Elements	from '../images/princeton.jpg';		
import	Elite5Sushi	from '../images/princeton.jpg';		
import	FruityYogurt	from '../images/princeton.jpg';		
import	FruttaBowls	from '../images/princeton.jpg';		
import	HaloPub	from '../images/princeton.jpg';		
import	HoagieHaven	from '../images/princeton.jpg';		
import	HouseofCupcakes	from '../images/princeton.jpg';		
import	HunanChineseRestaurant	from '../images/princeton.jpg';		


/* Images */
import princeton from '../images/princeton.jpg';
import pj from '../images/pj_pancake.jpg';

const Homepage = () => (
	<div className="center-text">
		<Header solid={false} />

		<div className="sectionBackground">
			{/************* Restaurants *********************/}
<<<<<<< HEAD
			<h1 className ="section-title">Restaurants</h1>
=======
			<h1 className="section-title" color='white'>Restaurants</h1>
>>>>>>> 56cce5de05bedd9fa8ec575c095c8b719cd68916
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
<<<<<<< HEAD
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
=======
			</Row>



			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Agricola"
						img={Agricola}
						url="https://www.agricolaeatery.com/"
						text="Creative farm-to-table fare is the draw at this modern eatery with an open kitchen & hip atmosphere."
						tags={
							<div className="my-container space">
								<Tag name="American" color={Colors.americanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Ajiten Japanese"
						img={AjitenJapanese}
						url="https://www.ajitenprinceton.com/"
						text="Japanese fare served in an unassuming basement setting with a BYOB policy. No parties over 4."
						tags={
							<div className="my-container space">
								<Tag name="Japanese" color={Colors.japaneseTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Alchemist and Barrister"
						img={AlchemistandBarrister}
						url="http://www.theaandb.com/"
						text="Quaint restaurant offering up standard American bar food in a rustic interior & on a patio."
						tags={
							<div className="my-container space">
								<Tag name="American" color={Colors.americanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
				</Row>
				<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Arlee's Raw Blends"
						img={ArleesRawBlends}
						url="https://www.arleesrawblends.com/"
						text="Modern shop offering glass-bottled, cold-pressed juices made with locally sourced, organic produce."
						tags={
							<div className="my-container space">
								<Tag name="Juice and Smoothies" color={Colors.juiceandsmoothiesTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Bent Spoon Artisan Ice Cream and Bakery"
						img={BentSpoonArtisanIceCreamandBakery}
						url="https://www.thebentspoon.com/"
						text="Inventive ice cream made from organic ingredients along with baked sweets in a compact setting."
						tags={
							<div className="my-container space">
								<Tag name="Ice Cream" color={Colors.icecreamTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Blue Point Grill"
						img={BluePointGrill}
						url="http://www.bluepointgrill.com/"
						text="Lively dinner-only spot serving up seafood from the neighboring market indoors and on a patio."
						tags={
							<div className="my-container space">
								<Tag name="Bar and Grill" color={Colors.barandgrillTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
				</Row>
				<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Café Vienna"
						img={CaféVienna}
						url="https://www.viennainprinceton.com/"
						text="Classy cafe offering American and Viennese-style omelettes, sandwiches and desserts, plus outdoor seats."
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Chapin Guatamalean Cuisine"
						img={ChapinGuatamaleanCuisine}
						url=""
						text="Traditional Guatamalean food"
						tags={
							<div className="my-container space">
								<Tag name="Guatemalan" color={Colors.guatemalanTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Chenai Chimeny"
						img={ChenaiChimeny}
						url="https://www.chennaichimney.com/"
						text="Calm, refined restaurant specializing in South Indian specialties, with a weekend lunch buffet."
						tags={
							<div className="my-container space">
								<Tag name="Indian" color={Colors.indianTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
				</Row>
				<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="Chez Alice Gourmet Café and Bakery"
						img={ChezAliceGourmetCaféBakery}
						url="http://chezalicecafe.com/"
						text="American fare like sandwiches, sweets and custom cakes are created at this cheerful restaurant."
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Chuck's Spring St. Café"
						img={ChucksSpringStCafé}
						url="http://www.chucksspringstreetcafe.com/"
						text="Bare-bones counter-serve joint with a varied fast-food menu, from Buffalo wings to burgers and BBQ."
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Conte's Pizza"
						img={ContesPizza}
						url="http://contespizzaandbar.blog/"
						text="Bustling and cavernous spot for thin-crust pies, drinks, sports on TV and old-school decor."
						tags={
							<div className="my-container space">
								<Tag name="Pizza" color={Colors.pizzaTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
				</Row>
				<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="D'Angelo's"
						img={DAngelos}
						url="https://www.dangelomarket.com/"
						text="Italian market and deli offering pizza, sandwiches, baked goods, imported grocery items and more."
						tags={
							<div className="my-container space">
								<Tag name="Italian" color={Colors.italianTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Dinky Bar and Kitchen"
						img={DinkyBarKitchen}
						url="https://www.dinkybarandkitchen.com/"
						text="A onetime train station offering beer, cocktails and small and large American plates amid rustic decor."
						tags={
							<div className="my-container space">
								<Tag name="Bar and Grill" color={Colors.barandgrillTag} />



							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Dunkin Donuts"
						img={DunkinDonuts}
						url="https://www.dunkindonuts.com/en"
						text="Long-running chain serving signature donuts, breakfast sandwiches and a variety of coffee drinks."
						tags={
							<div className="my-container space">
								<Tag name="Sweets" color={Colors.sweetsTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
				</Row>
				<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="EFES Mediterranean"
						img={EFESMediterranean}
						url="https://efesgrill.com/"
						text="BYOB eatery serving up Mediterranean meze plates and grilled fare in a casual setting."
						tags={
							<div className="my-container space">
								<Tag name="Mediterranean" color={Colors.mediterraneanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Elements"
						img={Elements}
						url="http://www.elementsprinceton.com/"
						text="Local, sustainable ingredients are used to create New American cuisine at this upscale eatery."
						tags={
							<div className="my-container space">
								<Tag name="American" color={Colors.americanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Elite 5 Sushi"
						img={Elite5Sushi}
						url="https://www.elitefives.com/"
						text="Elite Five Sushi and Grill offers the freshest ingredients in the form of sushi, sashimi, ramen, yakitori, and rich offerings of land and sea that including ribeye, duck and lobster."
						tags={
							<div className="my-container space">
								<Tag name="Japanese" color={Colors.japaneseTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
				</Row>
				<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Fruity Yogurt"
						img={FruityYogurt}
						url="http://www.fruity-yogurt.com/"
						text="Fruity Yogurt is a self serve frozen yogurt cafe specializing in unique store made flavors. We also serve a wide selection of specialty teas."
						tags={
							<div className="my-container space">
								<Tag name="Sweets" color={Colors.sweetsTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Frutta Bowls"
						img={FruttaBowls}
						url="https://www.fruttabowls.com/"
						text="Frutta Bowls is the fastest growing superfoods cafe in the nation, providing healthy alternatives to traditional fast food chains in the form of Acai, Pitaya & Kale bowls."
						tags={
							<div className="my-container space">
								<Tag name="Juice and Smoothies" color={Colors.juiceandsmoothiesTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Halo Pub"
						img={HaloPub}
						url="https://www.palmersquare.com/directory/halo-pub/"
						text="Halo Pub provides its own locally made super-premium artisan ice cream and gourmet coffees from Philly’s La Colombe at a popular gathering spot on the Square."
						tags={
							<div className="my-container space">
								<Tag name="Ice Cream" color={Colors.icecreamTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
				</Row>
				<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="Hoagie Haven"
						img={HoagieHaven}
						url="http://www.hoagiehaven.com/"
						text="Sandwich shop serving up foot-long hoagies since the early 1970s. Cash only."
						tags={
							<div className="my-container space">
								<Tag name="Sandwich" color={Colors.sandwichTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="House of Cupcakes"
						img={HouseofCupcakes}
						url="https://houseofcupcakes.com/"
						text="Bright bakery whipping up over 30 flavors of cupcakes, along with custom ice cream sandwiches."
						tags={
							<div className="my-container space">
								<Tag name="Sweets" color={Colors.sweetsTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Hunan Chinese Restaurant"
						img={HunanChineseRestaurant}
						url=""
						text="Laid-back Chinese standby fixing up egg rolls, fried rice and other everyday eats."
						tags={
							<div className="my-container space">
								<Tag name="Chinese" color={Colors.chineseTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
				
				
			</Row>

		</div>
	</div>
>>>>>>> d1efa0fabfcd37e23e09304dc4e5c69836697259
);

const styles = {
	projectRow: {
		marginBottom: '50px'
	}
};

export default Homepage;

