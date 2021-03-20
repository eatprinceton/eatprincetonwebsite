import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Tag from '../components/Tag';
import Card from '../components/Card';

import Agricola from '../images/agricola.jpg';
import AjitenJapanese from '../images/ajiten.jpg';
import AlchemistandBarrister from '../images/alchemistbarrister.jpeg';
import ArleesRawBlends from '../images/arleeRawBlends.jpeg';
import BentSpoonArtisanIceCreamandBakery from '../images/bentSpoon.jpeg';
import BluePointGrill from '../images/bluePointGrill.jpeg';
import CaféVienna from '../images/cafeVienna.jpeg';
import ChapinGuatamaleanCuisine from '../images/chapin.jpeg';
import ChenaiChimeny from '../images/chennaiChimney.jpeg';
import ChezAliceGourmetCaféBakery from '../images/ChezAlice.jpeg';
import ChucksSpringStCafé from '../images/chuckSpringSt.jpeg';
import ContesPizza from '../images/contesPizza.jpeg';
import DAngelos from '../images/dangelosItalian.jpeg';
import DinkyBarKitchen from '../images/dinkyBarGrill.jpeg';
import DunkinDonuts from '../images/dunkin.jpeg';
import EFESMediterranean from '../images/efes.png';
import Elements from '../images/elements.png';
import Elite5Sushi from '../images/elitefives.png';
import FruityYogurt from '../images/fruityyogurt.png';
import FruttaBowls from '../images/frutta.png';
import HaloPub from '../images/halopub.png';
import HoagieHaven from '../images/hoagiehaven.png';
import HouseofCupcakes from '../images/houseofcupcakes.png';
import HunanChineseRestaurant from '../images/hunan.png';

import IvyInnBarandRestaurant from '../images/ivy.png';
import JamminCrepes from '../images/jammincrepes.png';
import JulesThinCrustPizza from '../images/julesthinpizza.png';
import KBGKoreanbbqgrill from '../images/kbg.png';
import Kilwins from '../images/kilwins.png';
import Kristines from '../images/kristine\'s.png';
import LaMezzaluna from '../images/lamezzaluna.png';
import LanRamen from '../images/lanramen.png';
import LilThaiPin from '../images/lilthaipin.png';
import LittleChefPastryShop from '../images/littlechefpastry.png';
import LocalGreek from '../images/localgreek.png';
import LupitaMexicanGrocery from '../images/lupitamexican.png';
import MamounsFalafelRestaurant from '../images/mamoun.jpeg';
import Mediterra from '../images/mediterra.jpeg';
import MeetingHouse from '../images/meetingHouse.jpeg';

import MetroNorth from '../images/metroNorth.jpeg';
import MilkCookies from '../images/milkAndCookies.jpeg';
import Mistral from '../images/mistral.jpeg';
import MolisanaDeli from '../images/molisanaDeli.jpeg';
import NassauSeafoodandProduce from '../images/nassauSeafood.jpeg';
import NassauSushi from '../images/nassauSushi.jpeg';
import Olives from '../images/olives.jpeg';
import OlssonsFineFoods from '../images/Olssons.jpeg';
import PaneraBread from '../images/panera.jpeg';
import PizzaDen from '../images/pizzaDen.jpeg';

import PJsPancakeHouse from '../images/pj_pancake.jpg';
import PrincetonSoupSandwich from '../images/princetonsoupandsandwich.jpg';
import PlayaBowls from '../images/playabowls.jpg';
import PurinsuRamen from '../images/purinsu.jpg';

import Qdoba from '../images/qdoba.jpg';
import RojosRoastery from '../images/rojos.jpg';
import RootsOceanPrime from '../images/rootsocean.jpg';
import SakridCoffee from '../images/sakrid.jpg';
import SakuraExpress from '../images/sakuraexpress.jpg';
import SayCheez from '../images/saycheez.jpg';
import SmallBites from '../images/smallbites.jpg';
import SmallWorldCoffee from '../images/smallworldcoffee.jpg';
import SoonjasCuisine from '../images/soonjas.jpg';
import Starbucks from '../images/starbucks.jpg';
import Tacoria from '../images/tacoria.jpg';
import TasteofMexico from '../images/tasteofmexico.jpg';
import TerramomoBakery from '../images/terramomo.jpg';

import	ThaiVillagePlace	from '../images/thaivillage.jpg';
import	TheBentSpoon	from '../images/thebentspoon.jpg';
import	ThePastryRoom	from '../images/thepastryroom.jpg';
import	TheYankeeDoodleTapRoom	from '../images/yankeedoodletap.jpg';
import	ThomasSweetChocolate	from '../images/thomassweetchoco.jpg';
import	ThomasSweetIceCream	from '../images/thomassweeticecream.jpg';
import	TicosEateryandJuiceBar	from '../images/ticos.jpg';
import	TigerNoodles	from '../images/tigernoodles.jpg';
import	TomoSushi	from '../images/tomo.jpg';
import	TortugasMexicanRestaurant	from '../images/tortuga.jpg';
import	TrattoriaProcaccini	from '../images/trattoria.jpg';
import	ViennaCafé	from '../images/cafevienna.jpg';
import	WinberiesRestaurantandBar	from '../images/winberie.jpg';
import	WitherspoonGrill	from '../images/witherspoon.jpg';

/* Images */
import princeton from '../images/princeton.jpg';
import pj from '../images/pj_pancake.jpg';

const Homepage = () => (
	<div className="center-text">
		<Header solid={false} />

		<div className="sectionBackground">
			{/************* Restaurants *********************/}
			<h1 className="section-title" color='white'>Restaurants</h1>
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
						title="The Bent Spoon"
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
						title="Chapin Cuisine"
						img={ChapinGuatamaleanCuisine}
						url="https://www.yelp.com/biz/chapin-guatemalan-and-mexican-restaurant-princeton"
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

			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Ivy Inn Bar and Restaurant"
						img={IvyInnBarandRestaurant}
						url="http://ivyinnprinceton.com/"
						text="Enduring, laid-back watering hole featuring DJs, live music & karaoke, with pub grub & a patio."
						tags={
							<div className="my-container space">
								<Tag name="Bar and Grill" color={Colors.barandgrillTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Jammin Crepes"
						img={JamminCrepes}
						url="https://www.jammincrepes.com/"
						text="Counter-serve operation known for sweet, savory & breakfast crêpes made with local ingredients."
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Jules Thin Crust Pizza"
						img={JulesThinCrustPizza}
						url="https://www.julesthincrust.com/"
						text="Modern pizzeria chain serving organic thin-crust pies & salads in a family-friendly setting."
						tags={
							<div className="my-container space">
								<Tag name="Pizza" color={Colors.pizzaTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>


				<Col lg={4}>
					<Card
						title="KBG Korean bbq & grill"
						img={KBGKoreanbbqgrill}
						url="http://www.eatkbg.com/"
						text="KBG Korean BBQ & Grill is a fast casual restaurant in New Jersey with flavor from Korea. "
						tags={
							<div className="my-container space">
								<Tag name="Korean" color={Colors.koreanTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Kilwin's"
						img={Kilwins}
						url="https://www.kilwins.com/Princeton"
						text="Old-fashioned confectionery chain selling chocolates, ice cream, handmade sweets & gift baskets."
						tags={
							<div className="my-container space">
								<Tag name="Sweets" color={Colors.sweetsTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Kristine's"
						img={Kristines}
						url="https://www.kristinesprinceton.com/"
						text="Fresh, Simple, French. Kristine's is a fresh take on a traditional French bistro. Serving delicious food, vegan and gluten-free options included."
						tags={
							<div className="my-container space">
								<Tag name="French" color={Colors.frenchTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="La Mezzaluna"
						img={LaMezzaluna}
						url="https://www.lamezzaluna.com/"
						text="Creative takes on classic Italian dishes are served at this colorful BYOB restaurant."
						tags={
							<div className="my-container space">
								<Tag name="Italian" color={Colors.italianTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Lan Ramen"
						img={LanRamen}
						url="https://www.lanramen.com/"
						text="A menu featuring Japanese plates & an array of ramen dishes in a relaxed space with counter seating."
						tags={
							<div className="my-container space">
								<Tag name="Chinese" color={Colors.chineseTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Lil' Thai Pin"
						img={LilThaiPin}
						url="https://www.lilthaipin.com/"
						text="Come experience great food, graceful decor, and a friendly atmosphere at Lil Thai Pin. Join us for authentic Thai cuisine and experience courteous service that will make you feel at home."
						tags={
							<div className="my-container space">
								<Tag name="Thai" color={Colors.thaiTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="Little Chef Pastry Shop"
						img={LittleChefPastryShop}
						url="http://www.littlechefpastries.com/"
						text="The cakes, tarts, napoleons, eclairs and other treats served in this adorable shop are delicious enough to make anyone swoon."
						tags={
							<div className="my-container space">
								<Tag name="Bakery" color={Colors.bakeryTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Local Greek"
						img={LocalGreek}
						url="https://www.localgreeknj.com/"
						text="Greek sharing plates & house-baked treats are served in a rustic space with a market section."
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
						title="Lupita Mexican Grocery"
						img={LupitaMexicanGrocery}
						url="https://www.yelp.com/biz/lupita-groceries-princeton"
						text="Authentic Mexican grocer with Mexican breads, fresh produce and meats"
						tags={
							<div className="my-container space">
								<Tag name="Mexican" color={Colors.mexicanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="Mamoun's Falafel Restaurant"
						img={MamounsFalafelRestaurant}
						url="https://mamouns.com/locations/princeton-nj"
						text="Local Middle Eastern chain serving falafel, shawarma, kebabs & more in a traditional space."
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
						title="Mediterra"
						img={Mediterra}
						url="https://www.mediterrarestaurant.com/"
						text="Seasonal Med fare in a rustic-chic setting, plus an extensive wine list & a patio."
						tags={
							<div className="my-container space">
								<Tag name="Mediterranean" color={Colors.mediterraneanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Meeting House"
						img={MeetingHouse}
						url="http://meetinghouseprinceton.com/"
						text="Restaurant and bar offering simple American cuisine with an emphasis on seasonal ingredients."
						tags={
							<div className="my-container space">
								<Tag name="American" color={Colors.americanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>

			<Row style={styles.projectRow}>

				<Col lg={4}>
					<Card
						title="Metro North"
						img={MetroNorth}
						url="http://www.metrorestaurantgroup.com/"
						text="Italian dishes served at a upscale-rustic venue with a bar scene & a patio."
						tags={
							<div className="my-container space">
								<Tag name="Italian" color={Colors.italianTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Milk & Cookies"
						img={MilkCookies}
						url="https://milkncookies.online/"
						text="Fresh cookies served along with nice, cold milk, and hot coffee and tea."
						tags={
							<div className="my-container space">
								<Tag name="Sweets" color={Colors.sweetsTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Mistral"
						img={Mistral}
						url="http://www.mistralprinceton.com/"
						text="Sophisticated, globally-inspired small plates in a serene & modern space with blond wood."
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
						title="Molisana Deli"
						img={MolisanaDeli}
						url="http://molisana-deli.poi.place/"
						text="Sandwich Shop Offering a Wide Range of Tasty Creations in Millstone."
						tags={
							<div className="my-container space">
								<Tag name="Sandwich" color={Colors.sandwichTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Nassau Seafood and Produce"
						img={NassauSeafoodandProduce}
						url="http://nassaustreetseafood.com/"
						text="Serves the community the highest quality seafood."
						tags={
							<div className="my-container space">
								<Tag name="American" color={Colors.americanTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Nassau Sushi"
						img={NassauSushi}
						url="https://nassausushi.godaddysites.com/"
						text="Sushi store next to Thomas Sweets and across the CVS"
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
						title="Olive's"
						img={Olives}
						url="http://www.olivesprinceton.com/"
						text="Basic bakery/deli serving baked goods & an all-day menu with Greek & vegetarian specialties."
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Olsson's Fine Foods"
						img={OlssonsFineFoods}
						url="http://www.olssonsfinefoods.com/"
						text="Offline & online cheese shop offering a wide range of imported and domestic cheeses, catering services and much more!"
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Panera Bread"
						img={PaneraBread}
						url="https://www.panerabread.com/en-us/home.html"
						text="American chain bakery-café fast casual restaurant"
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Pizza Den"
						img={PizzaDen}
						url="http://www.pizzadenprinceton.com/"
						text="Pizza made using made in-house dough"
						tags={
							<div className="my-container space">
								<Tag name="Pizza" color={Colors.pizzaTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="PJ's Pancake House"
						img={PJsPancakeHouse}
						url="http://www.pancakes.com/"
						text="Bustling all-day spot known for its signature pancakes & other breakfast food, plus outdoor seating."
						tags={
							<div className="my-container space">
								<Tag name="American" color={Colors.americanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Princeton Soup & Sandwich"
						img={PrincetonSoupSandwich}
						url="princetonsoupandsandwich.com"
						text="Easygoing, family-run place offering deli sandwiches & soups, including lobster bisque."
						tags={
							<div className="my-container space">
								<Tag name="Sandwich" color={Colors.sandwichTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Playa Bowls"
						img={PlayaBowls}
						url="https://www.playabowls.com/"
						text="Healthy, delicious açaí, pitaya, coconut bowls and smoothies with sustainability and community in mind."
						tags={
							<div className="my-container space">
								<Tag name="Juice and Smoothies" color={Colors.juiceandsmoothiesTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Purinsu Ramen"
						img={PurinsuRamen}
						url="https://www.purinsuramen.com/"
						text="Japanese restaurant known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients."
						tags={
							<div className="my-container space">
								<Tag name="Japanese" color={Colors.japaneseTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Qdoba"
						img={Qdoba}
						url="https://www.qdoba.com/"
						text="Chain of fast casual restaurants in the United States and Canada serving Mexican-style cuisine."
						tags={
							<div className="my-container space">
								<Tag name="Mexican" color={Colors.mexicanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Rojo's Roastery"
						img={RojosRoastery}
						url="https://rojosroastery.com/"
						text="Coffee specialist & roaster dispensing beverages made with sustainable beans, plus baked goods."
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Roots Ocean Prime"
						img={RootsOceanPrime}
						url="https://rootssteakhouse.com/roots_ocean_prime"
						text="Steak house located on the Princeton campus"
						tags={
							<div className="my-container space">
								<Tag name="Bar and Grill" color={Colors.barandgrillTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Sakrid Coffee"
						img={SakridCoffee}
						url="http://sakridcoffee.com/"
						text="Premium coffee paired with the best local foods and drinks"
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Sakura Express"
						img={SakuraExpress}
						url="http://www.sakuraexpressprinceton.com/"
						text="No-frills BYO spot for Japanese standards & sushi, with lots of vegetarian options & a salad bar."
						tags={
							<div className="my-container space">
								<Tag name="Japanese" color={Colors.japaneseTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Say Cheez"
						img={SayCheez}
						url="https://www.saycheezcafe.com/"
						text="Counter-serve diner offering macaroni & cheese, melted cheese sandwiches & other comfort foods."
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
						title="Small Bites"
						img={SmallBites}
						url="https://www.smallbitesbylocalgreek.com/"
						text="Easy takeout and homemade Gourmet Greek grab and go."
						tags={
							<div className="my-container space">
								<Tag name="Mediterranean" color={Colors.mediterraneanTag} />
								<Tag name="Dine-In" color={Colors.dineInTag} />
								<Tag name="TakeOut" color={Colors.takeoutTag} />
								<Tag name="Delivery" color={Colors.deliveryTag} />
							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Small World Coffee"
						img={SmallWorldCoffee}
						url="https://smallworldcoffee.com/"
						text="Coffee brewer using the highest quality beans available,"
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Soonja's Cuisine"
						img={SoonjasCuisine}
						url="https://www.yelp.com/biz/soonjas-cafe-princeton"
						text="Pan-Asian restaurant with a diverse menu of sushi, Korean specialties & more, plus a BYOB policy."
						tags={
							<div className="my-container space">
								<Tag name="Korean" color={Colors.koreanTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Starbucks"
						img={Starbucks}
						url="https://www.starbucks.com/"
						text="Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability."
						tags={
							<div className="my-container space">
								<Tag name="Cafe" color={Colors.cafeTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<Card
						title="Tacoria"
						img={Tacoria}
						url="http://tacoria.com/"
						text="Modern tacos, burritos & vegan offerings in a funky Mexican setting with vibrant art."
						tags={
							<div className="my-container space">
								<Tag name="Mexican" color={Colors.mexicanTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Taste of Mexico"
						img={TasteofMexico}
						url="https://www.yelp.com/biz/taste-of-mexico-princeton-2"
						text="Unassuming, compact go-to with outdoor seating & an extensive menu of Mexican specialties."
						tags={
							<div className="my-container space">
								<Tag name="Mexican" color={Colors.mexicanTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>

				<Col lg={4}>
					<Card
						title="Terramomo Bakery"
						img={TerramomoBakery}
						url="https://www.terramomo.com/terra-momo-bread-company/"
						text="Old-world bakery producing a range of rustic loaves & pastries in a bright, snug storefront."
						tags={
							<div className="my-container space">
								<Tag name="Bakery" color={Colors.bakeryTag} />

								<Tag name="TakeOut" color={Colors.takeoutTag} />

							</div>} />
				</Col>
			</Row>
			<Row style={styles.projectRow}>
			<Col lg={4}>
				<Card
					title="Thai Village Place"
					img={ThaiVillagePlace}
					url="http://www.thaivillageprinceton.com/"
					text="Amazing Delicious Thai restaurant"
					tags={
						<div className="my-container space">
							<Tag name="Thai" color={Colors.thaiTag} />
							<Tag name="Dine-In" color={Colors.dineInTag} />
							<Tag name="TakeOut" color={Colors.takeoutTag} />
							<Tag name="Delivery" color={Colors.deliveryTag} />
						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="The Bent Spoon"
					img={TheBentSpoon}
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
					title="The Pastry Room"
					img={ThePastryRoom}
					url="http://www.thepastryroom1.com/"
					text="Design your salad with a variety of fresh and healthy ingredients. Pair it with a delicious smoothie, made with all frozen fruit and never ice."
					tags={
						<div className="my-container space">
							<Tag name="Bakery" color={Colors.bakeryTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />

						</div>} />
			</Col>
			</Row>
			<Row style={styles.projectRow}>
			<Col lg={4}>
				<Card
					title="The Yankee Doodle Tap Room"
					img={TheYankeeDoodleTapRoom}
					url="https://www.nassauinn.com/dining/"
					text="In the historical Nassau Inn, this spot features pub fare & a Norman Rockwell mural behind the bar."
					tags={
						<div className="my-container space">
							<Tag name="Bar and Grill" color={Colors.barandgrillTag} />
							<Tag name="Dine-In" color={Colors.dineInTag} />
							<Tag name="TakeOut" color={Colors.takeoutTag} />

						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="Thomas Sweet Chocolate"
					img={ThomasSweetChocolate}
					url="https://thomassweet.com/"
					text="Whether you’re enjoying our homemade ice creams and blend-ins, our freshly baked pastries or our handmade chocolates, you can always count on our attention to ingredients and craftsmanship."
					tags={
						<div className="my-container space">
							<Tag name="Sweets" color={Colors.sweetsTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />

						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="Thomas Sweet Ice Cream"
					img={ThomasSweetIceCream}
					url="https://thomassweet.com/"
					text="Whether you’re enjoying our homemade ice creams and blend-ins, our freshly baked pastries or our handmade chocolates, you can always count on our attention to ingredients and craftsmanship."
					tags={
						<div className="my-container space">
							<Tag name="Ice Cream" color={Colors.icecreamTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />

						</div>} />
			</Col>
			</Row>
			<Row style={styles.projectRow}>
			<Col lg={4}>
				<Card
					title="Tico's Eatery and Juice Bar"
					img={TicosEateryandJuiceBar}
					url="https://www.ticosprinceton.com/"
					text="Juice bar offering cold-pressed fruit & vegetable blends, including cleanse plans, plus smoothies."
					tags={
						<div className="my-container space">
							<Tag name="Juice and Smoothies" color={Colors.juiceandsmoothiesTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />

						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="Tiger Noodles"
					img={TigerNoodles}
					url="https://www.princetontigernoodles.com/"
					text="Casual noodle shop featuring Chinese eats, a BYOB policy & patio seating."
					tags={
						<div className="my-container space">
							<Tag name="Chinese" color={Colors.chineseTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />

						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="Tomo Sushi"
					img={TomoSushi}
					url="https://www.tomosushiprinceton.com/"
					text="Small BYO eatery near Princeton U. campus serving Japanese standards & a large variety of sushi."
					tags={
						<div className="my-container space">
							<Tag name="Japanese" color={Colors.japaneseTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />
							<Tag name="Delivery" color={Colors.deliveryTag} />
						</div>} />
			</Col>
			</Row>
			<Row style={styles.projectRow}>
			<Col lg={4}>
				<Card
					title="Tortuga's Mexican Restaurant"
					img={TortugasMexicanRestaurant}
					url="https://www.tortugasmv.com/"
					text="Energetic cash-only Mexican restaurant with traditional dishes & a BYOB policy."
					tags={
						<div className="my-container space">
							<Tag name="Mexican" color={Colors.mexicanTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />
							<Tag name="Delivery" color={Colors.deliveryTag} />
						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="Trattoria Procaccini"
					img={TrattoriaProcaccini}
					url="http://getforky.com/"
					text="BYOB Italian eatery offering an area-sourced traditional menu in a casual, industrial setting."
					tags={
						<div className="my-container space">
							<Tag name="Italian" color={Colors.italianTag} />
							<Tag name="Dine-In" color={Colors.dineInTag} />
							<Tag name="TakeOut" color={Colors.takeoutTag} />
							<Tag name="Delivery" color={Colors.deliveryTag} />
						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="Vienna Café"
					img={ViennaCafé}
					url="https://www.viennacafeandbistro.com/"
					text="Classy cafe offering American & Viennese-style omelettes, sandwiches & desserts, plus outdoor seats."
					tags={
						<div className="my-container space">
							<Tag name="Cafe" color={Colors.cafeTag} />

							<Tag name="TakeOut" color={Colors.takeoutTag} />
							<Tag name="Delivery" color={Colors.deliveryTag} />
						</div>} />
			</Col>
			</Row>
			<Row style={styles.projectRow}>
			<Col lg={4}>
				<Card
					title="Winberie's Restaurant and Bar"
					img={WinberiesRestaurantandBar}
					url="http://princeton.winberies.com/"
					text="Casual eatery that serves up burgers, brews & brunch, plus a gluten-free menu."
					tags={
						<div className="my-container space">
							<Tag name="American" color={Colors.americanTag} />
							<Tag name="Dine-In" color={Colors.dineInTag} />
							<Tag name="TakeOut" color={Colors.takeoutTag} />
							<Tag name="Delivery" color={Colors.deliveryTag} />
						</div>} />
			</Col>

			<Col lg={4}>
				<Card
					title="Witherspoon Grill"
					img={WitherspoonGrill}
					url="https://www.witherspoongrill.com/"
					text="Lively grill (with a bustling bar scene) known for surf 'n' turf, cocktails & a patio."
					tags={
						<div className="my-container space">
							<Tag name="Bar and Grill" color={Colors.barandgrillTag} />
							<Tag name="Dine-In" color={Colors.dineInTag} />
							<Tag name="TakeOut" color={Colors.takeoutTag} />

						</div>} />
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

