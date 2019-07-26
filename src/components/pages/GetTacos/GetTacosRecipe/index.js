import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../';
import tacos from '../../../../utils/tacos';
import Ingredient from '../../../atoms/Ingredient';
import './GetTacosRecipe.css';

const Ingredient404 = () => (
	<Page>
		<div className="ingredient-404">
			<h1>Bummer.</h1>
			<p>It looks like we don't have that recipe.</p>
		</div>
	</Page>
);

const toIngredient = (i, ind) => <Ingredient key={i.label + ind} ingredient={i}/>;

const toPrepListItem = (i, ind) => <li key={i + ind}>{i.prep} {i.amt} {i.label}</li>;


class GetTacosRecipe extends Component {
	constructor(props) {
		super(props);
		this.recipe = tacos[this.props.match.params.id];
		this.state = {
			recipeStepsList: this.recipe.hasOwnProperty('recipeSteps') ? this.recipe.recipeSteps.map(s => ({isComplete: false, label: s})) : []
		};
		this.toStepListItem = this.toStepListItem.bind(this);
		this.handleToggleListItem = this.handleToggleListItem.bind(this);
	}
	
	toStepListItem = (s, ind) => <li key={s.label + ind} onClick={() => this.handleToggleListItem(ind)} className={s.isComplete ? 'complete' : 'incomplete'} data-number={ind + 1}>{s.label}</li>;
	
	handleToggleListItem(ind) {
		console.log('handleToggleListItem', ind, this.state.recipeStepsList);
		const recipeStepsList = this.state.recipeStepsList.slice();
		const updatedItem = {label: recipeStepsList[ind].label, isComplete: !recipeStepsList[ind].isComplete};
		recipeStepsList[ind] = updatedItem;
		this.setState({recipeStepsList});
	}
	
	render() {
		if (this.recipe === undefined) return <Ingredient404/>;
		let { id, label, prepDuration, imgSrc, description, ingredients, recipeSteps } = this.recipe;
		const ingredientList = ingredients.map(toIngredient);
		const ingredientPrepList = ingredients.filter(i => i.prep).map(toPrepListItem);
		const recipeStepsList = this.state.recipeStepsList.map(this.toStepListItem);
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
						<h2>how to make these tacos</h2>
					</div>
					<div id="directions">
						<div>
							<h3>ingredient prep</h3>
						</div>
						<div>
							<ul>
								{ingredientPrepList}
							</ul>
						</div>
						<div>
							<h3>directions</h3>
						</div>
						<div>
							<ol>
								{recipeStepsList}
							</ol>
						</div>
					</div>
				</section>
			</Page>
		);
	}
}

export default GetTacosRecipe;