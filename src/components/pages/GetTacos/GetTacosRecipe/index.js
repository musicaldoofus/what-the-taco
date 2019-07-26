import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../';
import tacos from '../../../../utils/tacos';
import Ingredient from '../../../atoms/Ingredient';
import './GetTacosRecipe.css';

const toIngredient = (i) => <Ingredient key={i} ingredient={i}/>

const GetTacosRecipe = ({match}) => {
	console.log(match.params.id);
	const recipe = tacos[match.params.id];
	let { id, label, prepDuration, imgSrc, description, ingredients, recipeSteps } = recipe;
	const ingredientList = ingredients.map(toIngredient);
	console.log(ingredientList);
	return (
		<Page>
			<div id="back-to-recipes">
				<Link to="/get">&larr; back to recipes</Link>
			</div>
			<div id="recipe-title">
				<div>
					<h1>{label}</h1>
				</div>
				<div>
					<p className="sm muted">{prepDuration}</p>
				</div>
			</div>
			<div id="recipe-img">
				<img src={imgSrc} alt={label}/>
			</div>
			<section>
				<div id="overview-header">
					<h2>overview</h2>
				</div>
				<div id="overview">
					<p>{description}</p>
				</div>
			</section>
			<section>
				<div id="ingredients-header">
					<h2>ingredients</h2>
				</div>
				<div id="ingredients">
					{ingredientList}
				</div>
			</section>
			<section>
				<div id="directions-header">
				</div>
				<div id="directions">
				</div>
			</section>
		</Page>
	);
}

export default GetTacosRecipe;