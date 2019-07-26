import React from 'react';
import Button from '../../atoms/Button';
import './RecipeCard.css';

const RecipeCard = ({id, imgSrc, label, description, ingredients, prepDuration, recipeSteps, match}) => {
	return (
		<div id={`recipe ${label}-${id}`} className="recipe-card box-shadow">
			<div>
				<img src={imgSrc} alt={label}/>
			</div>
			<span id="spacer-row"></span>
			<div id="recipe-label">
				<h3>{label}</h3>
			</div>
			<span id="spacer-row"></span>
			<div id="recipe-duration">
				<p className="muted sm">{prepDuration}</p>
			</div>
			<span id="spacer-row"></span>
			<div id="recipe-description">
				<p>
					<span className="paragraph-trim">{description}</span>
				</p>
			</div>
			<span id="spacer-row"></span>
			<div id="recipe-view-button">
				<Button to={`${match.url}/recipes/${id}`}>get this taco</Button>
			</div>
		</div>
	);
}

export default RecipeCard;