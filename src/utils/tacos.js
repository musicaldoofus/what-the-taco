import stockTacoOne from '../media/img/stock-taco-1.webp';
import stockTacoTwo from '../media/img/stock-taco-2.jpg';

const INGREDIENTS = {
	//tortillas
	TORTILLA: 'tortilla',
	
	//fillings
	RICE: 'rice',
	BROWN_RICE: 'brown rice',
	
	//pico and other veggies
	ONION: 'white onion',
	ONION_RED: 'red onion',
	ONIONS_PICKLED: 'pickled onions',
	CABBAGE: 'cabbage',
	RED_CABBAGE: 'red cabbage',
	LETTUCE: 'lettuce',
	GARLIC: 'garlic cloves',
	RADISH: 'radishes',
	CILANTRO: 'cilantro',
	
	//cheeses
	CHEESE_QUESO: 'queso fresco',
	
	//garnishes and sauces
	LIME: 'lime',
	LIME_JUICE: 'lime juice',
	ORANGE: 'orange',
	ORANGE_JUICE: 'orange juice',
	VINEGAR_APPLE_CIDER: 'apple cider vinegar',
	HONEY: 'honey',
	
	//spices
	PAPRIKA: 'paprika',
	PAPRIKA_SMOKED: 'smoked paprika',
	OREGANO: 'oregano',
	SALT: 'salt',
	PEPPER: 'black pepper',
	ONION_POWDER: 'onion powder',
	CUMIN: 'cumin',
	GARLIC_POWDER: 'garlic powder',
	
	//meats
	CHICKEN: 'chicken',
	PORK_SHOULDER: 'pork shoulder',
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
			{
				label: INGREDIENTS.TORTILLA,
				amt: '1',
			},
			{
				label: INGREDIENTS.RED_CABBAGE,
				amt: '1/4 cup',
			},
			{
				label: INGREDIENTS.CHICKEN,
				amt: '2 breasts',
			}
		],
		recipeSteps: [
			'Before doing something, do this first. Then, do that.'
		]
	},
	{
		id: 1,
		label: 'slow cooker carnitas',
		prepDuration: '20 minutes',
		cookTime: '8 hours',
		servings: 6,
		description: '',
		imgSrc: 'https://www.spicesinmydna.com/wp-content/uploads/2018/04/Carnitas-Street-Tacos-12.jpg',
		ingredients: [
		

			{
				label: INGREDIENTS.ONION,
				amt: '1',
				prep: 'dice'
			},
			{
				label: INGREDIENTS.GARLIC,
				amt: '3 cloves',
			},
			{
				label: INGREDIENTS.ORANGE,
				amt: '1',
			},
			{
				label: INGREDIENTS.LIME_JUICE,
				amt: '1 lime',
			},
			{
				label: INGREDIENTS.PORK_SHOULDER,
				amt: '3 - 4 lbs',
			},
			{
				label: INGREDIENTS.CUMIN,
				amt: '2 tsp',
			},
			{
				label: INGREDIENTS.OREGANO,
				amt: '1 1/2 tsp',
			},
			{
				label: INGREDIENTS.PAPRIKA,
				amt: '1/2 tsp',
			},
			{
				label: INGREDIENTS.ONION_POWDER,
				amt: '1/2 tsp',
			},
			{
				label: INGREDIENTS.GARLIC_POWDER,
				amt: '1/2',
			},
			{
				label: INGREDIENTS.PAPRIKA_SMOKED,
				amt: '1/4 tsp',
			},
			{
				label: INGREDIENTS.SALT,
				amt: '1 tsp',
			},
			{
				label: INGREDIENTS.ONION_RED,
				amt: '1/2',
				prep: 'slice into thin strips'
			},
			{
				label: INGREDIENTS.VINEGAR_APPLE_CIDER,
				amt: '1/2 c',
			},
			{
				label: INGREDIENTS.HONEY,
				amt: '2 tbsp',
			},
			{
				label: INGREDIENTS.SALT,
				amt: '1/2 tsp',
			},
			{
				label: INGREDIENTS.CHEESE_QUESO,
				amt: '1 c',
			},
			{
				label: INGREDIENTS.RADISH,
				amt: '1 bunch',
			},
			{
				label: INGREDIENTS.CILANTRO,
				amt: '1 bunch',
				prep: 'chop'
			},
			{
				label: INGREDIENTS.LIME,
				amt: '(to serve)',
				prep: 'slice into wedges'
			},
			{
				label: INGREDIENTS.TORTILLA,
				amt: '(to serve)'
			}
		],
		recipeSteps: [
			'Rinse the pork shoulder with cold water and pat dry with paper towels.',
			'Place the onion and garlic in the slow cooker. In a small bowl, combine the cumin, oregano, paprika, onion powder, garlic powder, smoked paprika, and salt. Stir to combine.',
			'Rub spice mixture all over the pork shoulder and place in the slow cooker. Add the orange juice and lime juice.',
			'Cook on low for 7-8 hours, or on high for 4-5.',
			'A half hour or so before pork is finished, combine the red onion, apple cider vinegar, honey, and salt in a medium bowl and stir to combine.',
			'Let sit for 30 minutes or longer until ready to serve the tacos!',
			'When pork is finished, remove from slow cooker and shred with two forks.',
			'Preheat your broiler to high and position the rack in the upper third of the oven. Add the shredded pork to a rimmed baking sheet in a single layer.',
			'Broil for 3-4 minutes or until slightly crispy and golden on top.',
			'To assemble the tacos, char the tortillas if desired, and top them with the carnitas, a handful of pickled onions, a sprinkle of queso fresco and cilantro, and a squeeze of lime. Serve immediately!'
		]
	}
];


export default tacos;