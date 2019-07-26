import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import GetTacosHome from './GetTacosHome';
import GetTacosRecipe from './GetTacosRecipe';

const GetTacos = ({match}) => (
	<Fragment>
		<Route
			exact
			path={match.url}
			component={GetTacosHome}
		/>
		<Route
			exact
			path={`${match.url}/recipes`}
			render={(props) => {
				props.history.replace('/get');
				return <GetTacosHome {...props}/>
			}}
		/>
		<Route
			path={`${match.url}/recipes/:id`}
			component={GetTacosRecipe}
		/>
	</Fragment>
);

export default GetTacos;