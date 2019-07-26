import stockTacoOne from '../media/img/stock-taco-1.webp';
import stockTacoTwo from '../media/img/stock-taco-2.jpg';

const INGREDIENTS = {
	TORTILLA: 'tortilla',
	RICE: 'rice',
	BROWN_RICE: 'brown rice',
	ONIONS: 'onions',
	PICKLED_ONIONS: 'pickled onions',
	CABBAGE: 'cabbage',
	RED_CABBAGE: 'red cabbage',
	LETTUCE: 'lettuce',
	CHICKEN: 'chicken',
	PORK: 'pork',
	STEAK: 'steak',
	FISH: 'fish',
};

const tacos = [
	{
		id: 0,
		label: 'chicken tinga',
		prepDuration: '30 minutes',
		description: 'Super duper saucerini chicken-tini.',
		imgSrc: stockTacoTwo,
		ingredients: [
			INGREDIENTS.TORTILLA,
			INGREDIENTS.RED_CABBAGE,
			INGREDIENTS.CHICKEN
		],
		recipeSteps: [
			{
				label: 'Before doing something, do this first. Then, do that.'
			}
		]
	},
	{
		id: 1,
		label: 'chicken tinga',
		prepDuration: '30 minutes',
		description: 'Super duper saucerini chicken-tini.',
		imgSrc: stockTacoTwo,
		ingredients: [
			INGREDIENTS.TORTILLA,
			INGREDIENTS.RED_CABBAGE,
			INGREDIENTS.CHICKEN
		],
		recipeSteps: [
			{
				label: 'Before doing something, do this first. Then, do that.'
			}
		]
	},
	{
		id: 2,
		label: 'chicken tinga',
		prepDuration: '30 minutes',
		description: 'Super duper saucerini chicken-tini.',
		imgSrc: stockTacoTwo,
		ingredients: [
			INGREDIENTS.TORTILLA,
			INGREDIENTS.RED_CABBAGE,
			INGREDIENTS.CHICKEN
		],
		recipeSteps: [
			{
				label: 'Before doing something, do this first. Then, do that.'
			}
		]
	},
	{
		id: 3,
		label: 'chicken tinga',
		prepDuration: '30 minutes',
		description: 'Super duper saucerini chicken-tini.',
		imgSrc: stockTacoTwo,
		ingredients: [
			INGREDIENTS.TORTILLA,
			INGREDIENTS.RED_CABBAGE,
			INGREDIENTS.CHICKEN
		],
		recipeSteps: [
			{
				label: 'Before doing something, do this first. Then, do that.'
			}
		]
	},
	{
		id: 4,
		label: 'chicken tinga',
		prepDuration: '30 minutes',
		description: 'Super duper saucerini chicken-tini.',
		imgSrc: stockTacoTwo,
		ingredients: [
			INGREDIENTS.TORTILLA,
			INGREDIENTS.RED_CABBAGE,
			INGREDIENTS.CHICKEN
		],
		recipeSteps: [
			{
				label: 'Before doing something, do this first. Then, do that.'
			}
		]
	},
	{
		id: 5,
		label: 'chicken tinga',
		prepDuration: '30 minutes',
		description: 'Super duper saucerini chicken-tini.',
		imgSrc: stockTacoTwo,
		ingredients: [
			INGREDIENTS.TORTILLA,
			INGREDIENTS.RED_CABBAGE,
			INGREDIENTS.CHICKEN
		],
		recipeSteps: [
			{
				label: 'Before doing something, do this first. Then, do that.'
			}
		]
	}
];

export default tacos;