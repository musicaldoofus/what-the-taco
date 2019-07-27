import stockTacoOne from '../media/img/stock-taco-1.webp';
import stockTacoTwo from '../media/img/stock-taco-2.jpg';

const INGREDIENTS = {
	//tortillas
	TORTILLA_CORN: 'corn tortilla',
	TORTILLA_FLOUR: 'flour tortilla',
	
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
	AVACADO: 'avacado',
	PEPPER: 'pepper',
	PEPPER_SERRANO: 'serrano pepper',
	
	//cheeses
	CHEESE_QUESO: 'queso fresco',
	
	//garnishes, sauces, misc
	OIL: 'vegetable/canola oil',
	LIME: 'lime',
	LIME_JUICE: 'lime juice',
	ORANGE: 'orange',
	ORANGE_JUICE: 'orange juice',
	VINEGAR_APPLE_CIDER: 'apple cider vinegar',
	HONEY: 'honey',
	SOUR_CREAM: 'sour cream',
	HOT_SAUCE: 'hot sauce',
	TOMATO_SAUCE: 'tomato sauce',
	TOMATO_BOUILLON: 'tomato bouillon cube',
	MAYONNAISE: 'mayonnaise',
	
	//spices
	PAPRIKA: 'paprika',
	PAPRIKA_SMOKED: 'smoked paprika',
	OREGANO: 'oregano',
	SALT: 'salt',
	PEPPER: 'black pepper',
	ONION_POWDER: 'onion powder',
	CUMIN: 'cumin',
	GARLIC_POWDER: 'garlic powder',
	CHILI_POWDER: 'chili powder',
	CAYENNE: 'cayenne pepper',
	
	//meats
	CHICKEN: 'chicken',
	PORK_SHOULDER: 'pork shoulder',
	STEAK: 'steak',
	FISH: 'fish',
};

const tacos = [
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
	},
	{
		id: 2,
		label: 'fish tacos',
		prepDuration: '20 minutes',
		cookTime: '8 hours',
		servings: 4,
		description: 'You just can\'t go wrong with fresh, flavorful, and healthy Grilled Fish Tacos. These fish tacos are loaded with all the best toppings, including cabbage, pico de gallo and a simple homemade white sauce, or "crema", and they can be ready in less than 30 minutes.',
		imgSrc: 'https://tastesbetterfromscratch.com/wp-content/uploads/2018/04/Fish-Tacos-8.jpg',
		ingredients: [
			{
				label: INGREDIENTS.FISH,
				amt: '1 lb',
				prep: 'debone'
			},
			{
				label: INGREDIENTS.OIL,
				amt: '2 tbsp'
			},
			{
				label: INGREDIENTS.LIME_JUICE,
				amt: '1'
			},
			{
				label: INGREDIENTS.GARLIC,
				amt: '1 clove',
				prep: 'mince'
			},
			{
				label: INGREDIENTS.CHILI_POWDER,
				amt: '1 1/2 tsp'
			},
			{
				label: INGREDIENTS.CUMIN,
				amt: '1 tsp'
			},
			{
				label: INGREDIENTS.PAPRIKA,
				amt: '1/2 tsp'
			},
			{
				label: INGREDIENTS.CAYENNE,
				amt: '1/4 tsp'
			},
			{
				label: INGREDIENTS.TORTILLA_CORN,
				amt: '1'
			},
			{
				label: INGREDIENTS.SOUR_CREAM,
				amt: '1/2 c.'
			},
			{
				label: INGREDIENTS.MAYONNAISE,
				amt: '1/3 c.'
			},
			{
				label: INGREDIENTS.LIME_JUICE,
				amt: '1'
			},
			{
				label: INGREDIENTS.GARLIC_POWDER,
				amt: '1/2 tsp'
			},
			{
				label: INGREDIENTS.CUMIN,
				amt: '1/2 tsp'
			},
			{
				label: INGREDIENTS.SALT,
				amt: '1/4 tsp'
			}
		],
		recipeSteps: [
			'Season the fish with a little salt and pepper on both sides.',
			'In a mixing bowl whisk together the oil, lime juice, garlic, chili powder, cumin, paprika, cayenne.',
			'Add fish to a large ziplock bag and pour the marinade over fish. Seal bag and allow fish to marinade for 20-30 minutes.',
			'Preheat grill to medium-high heat. Brush grill grates with oil and grill fish filets for about 3-4 minutes on each side (cook time will vary depending on thickness of fish), flipping only once.',
			'Add the corn tortillas to the grill and warm for about 15 seconds on each side.',
			'Transfer fish to a plate and allow to rest for a few minutes before gently breaking into pieces.',
			'Serve on warm tortillas, topped with cabbage, pico de gallo, sauce and other desired toppings.',
			'Serve with a side of Authentic Mexican rice.'
		]
	},
	{
		id: 2,
		label: 'spicy avacado dressing',
		prepDuration: '5 minutes',
		cookTime: '1 minute',
		servings: 4,
		description: 'Grabbed from part of a recipe',
		imgSrc: '',
		ingredients: [
			{
				label: INGREDIENTS.AVACADO,
				amt: '1'
			},
			{
				label: INGREDIENTS.LIME,
				amt: '1/2'
			},
			{
				label: INGREDIENTS.HOT_SAUCE,
				amt: '1 - 2 tsp'
			}
		],
		recipeSteps: [
			'In a blender or food processor add the avocado, lime, hot sauce, and 1/4 cup of water.',
			'Puree, adding more water one tablespoon at a time until thin and drizzly like a dressing. Adjust hot sauce to taste.'
		]
	},
	{
		id: 3,
		label: 'creamy taco sauce',
		prepDuration: '5 minutes',
		cookTime: '1 minute',
		servings: 4,
		description: 'Grabbed from part of a recipe',
		imgSrc: '',
		ingredients: [
			{
				label: INGREDIENTS.SOUR_CREAM,
				amt: '1'
			},
			{
				label: INGREDIENTS.MAYONNAISE,
				amt: '1/2'
			},
			{
				label: INGREDIENTS.LIME_JUICE,
				amt: '1'
			},
			{
				label: INGREDIENTS.GARLIC_POWDER,
				amt: '1/2 tsp'
			},
			{
				label: INGREDIENTS.CUMIN,
				amt: '1/2 tsp'
			},
			{
				label: INGREDIENTS.SALT,
				amt: '1 tsp'
			},
			{
				label: INGREDIENTS.HOT_SAUCE,
				amt: '1 tsp'
			}
		],
		recipeSteps: [
			'In a blender or food processor add the avocado, lime, hot sauce, and 1/4 cup of water.',
			'Puree, adding more water one tablespoon at a time until thin and drizzly like a dressing. Adjust hot sauce to taste.'
		]
	},
	{
		id: 4,
		label: 'mexican rice',
		prepDuration: '5 minutes',
		cookTime: '20 minutes',
		servings: 4,
		description: 'Grabbed from part of a recipe',
		imgSrc: '',
		ingredients: [
			{
				label: INGREDIENTS.RICE,
				amt: '1 1/2 c',
				prep: 'rinse'
			},
			{
				label: INGREDIENTS.OIL,
				amt: '1/4 c'
			},
			{
				label: INGREDIENTS.GARLIC,
				amt: '1 tsp',
				prep: 'mince'
			},
			{
				label: INGREDIENTS.ONION,
				amt: '1/4',
				prep: 'dice'
			},
			{
				label: INGREDIENTS.TOMATO_SAUCE,
				amt: '1/4 c'
			},
			{
				label: INGREDIENTS.TOMATO_BOUILLON,
				amt: '2 cubes'
			},
			{
				label: INGREDIENTS.SALT,
				amt: '1/4 tsp'
			},
			{
				label: INGREDIENTS.PEPPER_SERRANO,
				amt: '3 - 4'
			}
		],
		recipeSteps: [
			'In a large saucepan over medium-high heat, add the oil. Add the rice and stir to combine. Cook over medium heat, stirring frequently, until the rice is lightly golden brown all over (about 10 minutes).',
			'Add tomato sauce, garlic, and diced onion to the pan. Stir. Add the tomato bullion cubes, salt, carrots, peas, and 1/4 c water (and serrano peppers, if using. They add a little flavor, but not spice.).',
			'Cook, stirring, until bullion cubes are completely dissolved. Bring to a boil, then cover, reduce heat to low and cook for about 20 minutes or until the water is completely absorbed.  Remove from heat and allow to rest for 5 minutes before fluffing with a fork.'
		]
	}
];

export default tacos;