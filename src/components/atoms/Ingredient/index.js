import React from 'react';
import './Ingredient.css';

const Ingredient = ({ingredient}) => (
	<span className="ingredient">
		<span>{ingredient.label}</span>
		<span>{ingredient.amt}</span>
	</span>
);

export default Ingredient;