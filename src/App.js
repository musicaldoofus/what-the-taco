import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import GetTacos from './components/pages/GetTacos';
import MyTacos from './components/pages/MyTacos';
import './App.css';

const withHashRouter = (routes) => (
	<HashRouter>
		{routes}
	</HashRouter>
);

const withBrowserRouter = (routes) => (
	<Router>
		{routes}
	</Router>
);

const App = () => {
	const routes = (
		<Switch>
			<Route
				exact
				path="/"
				component={Home}
			/>
			<Route
				path="/get"
				component={GetTacos}
			/>
			<Route
				path="/my"
				component={MyTacos}
			/>
		</Switch>
	);
	if (window.location.href.indexOf('localhost') > -1) return withBrowserRouter(routes);
	return withHashRouter(routes);
}
	
export default App;