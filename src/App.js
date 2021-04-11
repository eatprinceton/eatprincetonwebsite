import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import Restaurants from './screens/Restaurants';
import Homepage from './screens/Homepage';
import About from './screens/About';

const App = () => (
	<div>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
		/>
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
		<Route path="/restaurants" exact component={Restaurants} />
		<Route path="/about" exact component={About} />
		<Route path="/" exact component={Homepage} />
	</div>
);

export default App;
