(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(26).concat([function(e,t,a){e.exports=a.p+"static/media/WhatTheTacoLogo.dd029ff3.svg"},function(e,t,a){e.exports=a.p+"static/media/WhatTheTacoLogoText.54f8769b.svg"},function(e,t,a){e.exports=a.p+"static/media/magnifying-glass.595cd6ce.svg"},function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/stock-taco-1.db6dc55f.webp"},function(e,t,a){e.exports=a.p+"static/media/stock-taco-2.9b4a95a7.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(22),r=a.n(l),o=a(5),c=a(13),s=a(8),m=a(9),d=a(12),u=a(10),p=a(11),h=a(2),b=a(23),E=(a(34),function(){return i.a.createElement("span",{className:"transition-div"})}),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).timeout=null,a.state={show:!1},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"handleClick",value:function(e){var t=this;this.setState({show:!0}),function(){var a=t.props,n=a.replace,i=a.to,l=a.delay,r=a.onDelayStart,o=a.onDelayEnd,c=a.history;r(e,i),e.defaultPrevented||(e.preventDefault(),window.setTimeout(function(){n?c.replace(i):c.push(i),o(e,i)},l))}()}},{key:"render",value:function(){var e=this.props,t=(e.staticContext,Object(b.a)(e,["staticContext"])),a=Object.assign({},t);return delete a.delay,delete a.onDelayStart,delete a.onDelayEnd,i.a.createElement(n.Fragment,null,i.a.createElement(o.c,Object.assign({},a,{onClick:this.handleClick})),this.state.show&&i.a.createElement(E,null))}}]),t}(n.Component);f.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},f.contextTypes=o.c.contextTypes;var g,v=Object(c.f)(f),O=(a(39),function(e){var t=e.id,a=e.children,n=e.label,l=e.to,r=e.onClick,c=e.delay,s=a||n,m=t||"".concat(n||l,"-button");return c?i.a.createElement(v,{id:m,to:l,delay:c,className:"btn"},s):l?i.a.createElement(o.c,{id:m,to:l,className:"btn"},s):i.a.createElement("button",{id:m,className:"btn",onClick:r},s)}),w=(a(40),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={isScrolledDown:!1},e.handleScroll=e.handleScroll.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleScroll",value:function(){document.body.scrollTop>64||document.documentElement.scrollTop>64?this.setState({isScrolledDown:!0}):this.setState({isScrolledDown:!1})}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){return e.handleScroll()}}},{key:"render",value:function(){var e=i.a.createElement(O,{to:"/get"},"get"),t=i.a.createElement(O,{to:"/my"},"my"),a="nav".concat(this.state.isScrolledDown?" sm":" md");return i.a.createElement("nav",{name:"navigation bar",className:a,role:"navigation",id:"nav-bar"},i.a.createElement("div",{className:"navbar-inner-container"},e,t))}}]),t}(n.Component)),I=(a(41),function(){return i.a.createElement("footer",{className:"footer",role:"contentinfo"},i.a.createElement("div",null,i.a.createElement("p",{className:"sm muted"},"copyright 2019 what the taco")))}),A=(a(42),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={fading:!0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.setTimeout(function(){return e.setState({fading:!1})},500),window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement(w,null),i.a.createElement("main",null,this.props.children),i.a.createElement(I,null))}}]),t}(n.Component)),y=a(26),k=a.n(y),S=a(27),C=a.n(S),N=(a(43),function(e){return i.a.createElement(A,null,i.a.createElement("div",{style:{width:"100%"},className:"flex-div"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:"Get and save tacos with What the Taco!",src:k.a})),i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:"What the Taco",src:C.a}))),i.a.createElement("div",{style:{width:"100%",display:"flex"}},i.a.createElement(O,{to:"/get"},"get tacos")))}),R=a(28),L=a.n(R),T=(a(44),function(e){var t=e.handleOnChange,a=e.inputValue,n=e.handleOnBlur,l=e.name,r=e.placeholder;return i.a.createElement("div",{className:"input-container"},i.a.createElement("div",{className:"input-icon"},i.a.createElement("img",{src:L.a,alt:"Search for taco recipes by keyword."})),i.a.createElement("input",{name:l||"input",placeholder:r||"",type:"text",onChange:t,value:a,onBlur:n,onKeyPress:function(e){return 13===e.keyCode?n:void 0}}))}),j=(a(45),function(e){var t=e.id,a=e.imgSrc,n=e.label,l=e.description,r=(e.ingredients,e.prepDuration),o=(e.recipeSteps,e.match);return i.a.createElement("div",{id:"recipe ".concat(n,"-").concat(t),className:"recipe-card box-shadow"},i.a.createElement("div",null,i.a.createElement("img",{src:a,alt:n})),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-label"},i.a.createElement("h3",null,n)),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-duration"},i.a.createElement("p",{className:"muted sm"},r)),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-description"},i.a.createElement("p",null,i.a.createElement("span",{className:"paragraph-trim"},l))),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-view-button"},i.a.createElement(O,{to:"".concat(o.url,"/recipes/").concat(t)},"get this taco")))}),P=a(7),_=(a(46),a(47),g={TORTILLA_CORN:"corn tortilla",TORTILLA_FLOUR:"flour tortilla",RICE:"rice",BROWN_RICE:"brown rice",ONION:"white onion",ONION_RED:"red onion",ONIONS_PICKLED:"pickled onions",CABBAGE:"cabbage",RED_CABBAGE:"red cabbage",LETTUCE:"lettuce",GARLIC:"garlic cloves",RADISH:"radishes",CILANTRO:"cilantro",AVACADO:"avacado",PEPPER:"pepper",PEPPER_SERRANO:"serrano pepper",CHEESE_QUESO:"queso fresco",OIL:"vegetable/canola oil",LIME:"lime",LIME_JUICE:"lime juice",ORANGE:"orange",ORANGE_JUICE:"orange juice",VINEGAR_APPLE_CIDER:"apple cider vinegar",HONEY:"honey",SOUR_CREAM:"sour cream",HOT_SAUCE:"hot sauce",TOMATO_SAUCE:"tomato sauce",TOMATO_BOUILLON:"tomato bouillon cube",MAYONNAISE:"mayonnaise",PAPRIKA:"paprika",PAPRIKA_SMOKED:"smoked paprika",OREGANO:"oregano",SALT:"salt"},Object(P.a)(g,"PEPPER","black pepper"),Object(P.a)(g,"ONION_POWDER","onion powder"),Object(P.a)(g,"CUMIN","cumin"),Object(P.a)(g,"GARLIC_POWDER","garlic powder"),Object(P.a)(g,"CHILI_POWDER","chili powder"),Object(P.a)(g,"CAYENNE","cayenne pepper"),Object(P.a)(g,"CHICKEN","chicken"),Object(P.a)(g,"PORK_SHOULDER","pork shoulder"),Object(P.a)(g,"STEAK","steak"),Object(P.a)(g,"FISH","fish"),g),D=[{id:1,label:"slow cooker carnitas",prepDuration:"20 minutes",cookTime:"8 hours",servings:6,description:"",imgSrc:"https://www.spicesinmydna.com/wp-content/uploads/2018/04/Carnitas-Street-Tacos-12.jpg",ingredients:[{label:_.ONION,amt:"1",prep:"dice"},{label:_.GARLIC,amt:"3 cloves"},{label:_.ORANGE,amt:"1"},{label:_.LIME_JUICE,amt:"1 lime"},{label:_.PORK_SHOULDER,amt:"3 - 4 lbs"},{label:_.CUMIN,amt:"2 tsp"},{label:_.OREGANO,amt:"1 1/2 tsp"},{label:_.PAPRIKA,amt:"1/2 tsp"},{label:_.ONION_POWDER,amt:"1/2 tsp"},{label:_.GARLIC_POWDER,amt:"1/2"},{label:_.PAPRIKA_SMOKED,amt:"1/4 tsp"},{label:_.SALT,amt:"1 tsp"},{label:_.ONION_RED,amt:"1/2",prep:"slice into thin strips"},{label:_.VINEGAR_APPLE_CIDER,amt:"1/2 c"},{label:_.HONEY,amt:"2 tbsp"},{label:_.SALT,amt:"1/2 tsp"},{label:_.CHEESE_QUESO,amt:"1 c"},{label:_.RADISH,amt:"1 bunch"},{label:_.CILANTRO,amt:"1 bunch",prep:"chop"},{label:_.LIME,amt:"(to serve)",prep:"slice into wedges"},{label:_.TORTILLA,amt:"(to serve)"}],recipeSteps:["Rinse the pork shoulder with cold water and pat dry with paper towels.","Place the onion and garlic in the slow cooker. In a small bowl, combine the cumin, oregano, paprika, onion powder, garlic powder, smoked paprika, and salt. Stir to combine.","Rub spice mixture all over the pork shoulder and place in the slow cooker. Add the orange juice and lime juice.","Cook on low for 7-8 hours, or on high for 4-5.","A half hour or so before pork is finished, combine the red onion, apple cider vinegar, honey, and salt in a medium bowl and stir to combine.","Let sit for 30 minutes or longer until ready to serve the tacos!","When pork is finished, remove from slow cooker and shred with two forks.","Preheat your broiler to high and position the rack in the upper third of the oven. Add the shredded pork to a rimmed baking sheet in a single layer.","Broil for 3-4 minutes or until slightly crispy and golden on top.","To assemble the tacos, char the tortillas if desired, and top them with the carnitas, a handful of pickled onions, a sprinkle of queso fresco and cilantro, and a squeeze of lime. Serve immediately!"]},{id:2,label:"fish tacos",prepDuration:"20 minutes",cookTime:"8 hours",servings:4,description:'You just can\'t go wrong with fresh, flavorful, and healthy Grilled Fish Tacos. These fish tacos are loaded with all the best toppings, including cabbage, pico de gallo and a simple homemade white sauce, or "crema", and they can be ready in less than 30 minutes.',imgSrc:"https://tastesbetterfromscratch.com/wp-content/uploads/2018/04/Fish-Tacos-8.jpg",ingredients:[{label:_.FISH,amt:"1 lb",prep:"debone"},{label:_.OIL,amt:"2 tbsp"},{label:_.LIME_JUICE,amt:"1"},{label:_.GARLIC,amt:"1 clove",prep:"mince"},{label:_.CHILI_POWDER,amt:"1 1/2 tsp"},{label:_.CUMIN,amt:"1 tsp"},{label:_.PAPRIKA,amt:"1/2 tsp"},{label:_.CAYENNE,amt:"1/4 tsp"},{label:_.TORTILLA_CORN,amt:"1"},{label:_.SOUR_CREAM,amt:"1/2 c."},{label:_.MAYONNAISE,amt:"1/3 c."},{label:_.LIME_JUICE,amt:"1"},{label:_.GARLIC_POWDER,amt:"1/2 tsp"},{label:_.CUMIN,amt:"1/2 tsp"},{label:_.SALT,amt:"1/4 tsp"}],recipeSteps:["Season the fish with a little salt and pepper on both sides.","In a mixing bowl whisk together the oil, lime juice, garlic, chili powder, cumin, paprika, cayenne.","Add fish to a large ziplock bag and pour the marinade over fish. Seal bag and allow fish to marinade for 20-30 minutes.","Preheat grill to medium-high heat. Brush grill grates with oil and grill fish filets for about 3-4 minutes on each side (cook time will vary depending on thickness of fish), flipping only once.","Add the corn tortillas to the grill and warm for about 15 seconds on each side.","Transfer fish to a plate and allow to rest for a few minutes before gently breaking into pieces.","Serve on warm tortillas, topped with cabbage, pico de gallo, sauce and other desired toppings.","Serve with a side of Authentic Mexican rice."]},{id:2,label:"spicy avacado dressing",prepDuration:"5 minutes",cookTime:"1 minute",servings:4,description:"Grabbed from part of a recipe",imgSrc:"",ingredients:[{label:_.AVACADO,amt:"1"},{label:_.LIME,amt:"1/2"},{label:_.HOT_SAUCE,amt:"1 - 2 tsp"}],recipeSteps:["In a blender or food processor add the avocado, lime, hot sauce, and 1/4 cup of water.","Puree, adding more water one tablespoon at a time until thin and drizzly like a dressing. Adjust hot sauce to taste."]},{id:3,label:"creamy taco sauce",prepDuration:"5 minutes",cookTime:"1 minute",servings:4,description:"Grabbed from part of a recipe",imgSrc:"",ingredients:[{label:_.SOUR_CREAM,amt:"1"},{label:_.MAYONNAISE,amt:"1/2"},{label:_.LIME_JUICE,amt:"1"},{label:_.GARLIC_POWDER,amt:"1/2 tsp"},{label:_.CUMIN,amt:"1/2 tsp"},{label:_.SALT,amt:"1 tsp"},{label:_.HOT_SAUCE,amt:"1 tsp"}],recipeSteps:["In a blender or food processor add the avocado, lime, hot sauce, and 1/4 cup of water.","Puree, adding more water one tablespoon at a time until thin and drizzly like a dressing. Adjust hot sauce to taste."]},{id:4,label:"mexican rice",prepDuration:"5 minutes",cookTime:"20 minutes",servings:4,description:"Grabbed from part of a recipe",imgSrc:"",ingredients:[{label:_.RICE,amt:"1 1/2 c",prep:"rinse"},{label:_.OIL,amt:"1/4 c"},{label:_.GARLIC,amt:"1 tsp",prep:"mince"},{label:_.ONION,amt:"1/4",prep:"dice"},{label:_.TOMATO_SAUCE,amt:"1/4 c"},{label:_.TOMATO_BOUILLON,amt:"2 cubes"},{label:_.SALT,amt:"1/4 tsp"},{label:_.PEPPER_SERRANO,amt:"3 - 4"}],recipeSteps:["In a large saucepan over medium-high heat, add the oil. Add the rice and stir to combine. Cook over medium heat, stirring frequently, until the rice is lightly golden brown all over (about 10 minutes).","Add tomato sauce, garlic, and diced onion to the pan. Stir. Add the tomato bullion cubes, salt, carrots, peas, and 1/4 c water (and serrano peppers, if using. They add a little flavor, but not spice.).","Cook, stirring, until bullion cubes are completely dissolved. Bring to a boil, then cover, reduce heat to low and cook for about 20 minutes or until the water is completely absorbed.  Remove from heat and allow to rest for 5 minutes before fluffing with a fork."]}],M=(a(48),function(e,t){return i.a.createElement("span",{key:"".concat(e).concat(t)},e)}),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).toRecipeCard=function(e){return i.a.createElement(j,Object.assign({key:e.id,match:a.props.match},e))},a.state={inputValue:"",includedFilters:Object.keys(D[0]),inputFilters:[]},a.handleOnChange=a.handleOnChange.bind(Object(h.a)(a)),a.isInFilter=a.isInFilter.bind(Object(h.a)(a)),a.handleOnBlur=a.handleOnBlur.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"isInFilter",value:function(e){var t=this;this.state.inputValue;return this.state.includedFilters.filter(function(t){return"string"===typeof e[t]}).some(function(a){return t.state.inputFilters.filter(function(t){return e[a].indexOf(t)>-1})})}},{key:"handleOnChange",value:function(e){var t=e.target.value,a=" "==t.charAt(t.length-1),n=a?"":t,i=a?this.state.inputFilters.concat(t.split(" ")):this.state.inputFilters;this.setState({inputValue:n,inputFilters:i})}},{key:"handleOnBlur",value:function(e){var t=this.state.inputFilters.concat(e.target.value.split(" "));this.setState({inputFilters:t,inputValue:""})}},{key:"render",value:function(){var e=this,t=D.filter(this.isInFilter).map(this.toRecipeCard),a=this.state.inputFilters.map(M);return i.a.createElement(A,null,i.a.createElement("div",{role:"banner"},i.a.createElement("div",null,i.a.createElement("h1",null,"get  tacos")),i.a.createElement("div",null,i.a.createElement("h4",{className:"light"},"browse"),i.a.createElement("span",null),i.a.createElement("h4",{className:"light"},"customize"),i.a.createElement("span",null),i.a.createElement("h4",{className:"light"},"save"))),i.a.createElement("div",{style:{margin:"40px 0"}},i.a.createElement("div",{className:"input-container"},a,i.a.createElement(T,{type:"text",onChange:this.handleOnChange,value:this.state.inputValue,onBlur:this.handleOnBlur,onKeyPress:function(t){return 13===t.keyCode?e.handleOnBlur:void 0}}))),i.a.createElement("div",{className:"recipes-container"},t))}}]),t}(n.Component),x=(a(49),function(e){var t=e.ingredient;return i.a.createElement("span",{className:"ingredient"},i.a.createElement("span",null,t.label),i.a.createElement("span",null,t.amt))}),F=(a(50),function(){return i.a.createElement(A,null,i.a.createElement("div",{className:"ingredient-404"},i.a.createElement("h1",null,"Bummer."),i.a.createElement("p",null,"It looks like we don't have that recipe.")))}),G=function(e,t){return i.a.createElement(x,{key:e.label+t,ingredient:e})},B=function(e,t){return i.a.createElement("li",{key:e+t},e.prep," ",e.amt," ",e.label)},W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).toStepListItem=function(e,t){return i.a.createElement("li",{key:e.label+t,onClick:function(){return a.handleToggleListItem(t)},className:e.isComplete?"complete":"incomplete","data-number":t+1},e.label)},a.recipe=D[a.props.match.params.id],a.state={recipeStepsList:a.recipe.hasOwnProperty("recipeSteps")?a.recipe.recipeSteps.map(function(e){return{isComplete:!1,label:e}}):[]},a.toStepListItem=a.toStepListItem.bind(Object(h.a)(a)),a.handleToggleListItem=a.handleToggleListItem.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleToggleListItem",value:function(e){console.log("handleToggleListItem",e,this.state.recipeStepsList);var t=this.state.recipeStepsList.slice(),a={label:t[e].label,isComplete:!t[e].isComplete};t[e]=a,this.setState({recipeStepsList:t})}},{key:"render",value:function(){if(void 0===this.recipe)return i.a.createElement(F,null);var e=this.recipe,t=(e.id,e.label),a=e.prepDuration,l=e.imgSrc,r=e.description,c=e.ingredients,s=(e.recipeSteps,c.map(G)),m=c.filter(function(e){return e.prep}).map(B),d=this.state.recipeStepsList.map(this.toStepListItem);return i.a.createElement(A,null,i.a.createElement("div",{id:"back-to-recipes"},i.a.createElement(o.c,{to:"/get"},"\u2190 back to recipes")),i.a.createElement("div",{id:"recipe-title"},i.a.createElement("div",null,i.a.createElement("h1",null,t)),i.a.createElement("div",null,i.a.createElement("p",{className:"sm muted"},a))),i.a.createElement("div",{id:"recipe-img"},i.a.createElement("img",{src:l,alt:t})),i.a.createElement("section",null,i.a.createElement("div",{id:"overview-header"},i.a.createElement("h2",null,"overview")),i.a.createElement("div",{id:"overview"},i.a.createElement("p",null,r))),i.a.createElement("section",null,i.a.createElement("div",{id:"ingredients-header"},i.a.createElement("h2",null,"ingredients")),i.a.createElement("div",{id:"ingredients"},s)),i.a.createElement("section",null,i.a.createElement("div",{id:"directions-header"},i.a.createElement("h2",null,"how to make these tacos")),i.a.createElement("div",{id:"directions"},m.length>1&&i.a.createElement(n.Fragment,null,i.a.createElement("div",null,i.a.createElement("h3",null,"ingredient prep")),i.a.createElement("div",null,i.a.createElement("ul",null,m))),i.a.createElement("div",null,i.a.createElement("h3",null,"directions")),i.a.createElement("div",null,i.a.createElement("ol",null,d)))))}}]),t}(n.Component),H=function(e){var t=e.match;return i.a.createElement(n.Fragment,null,i.a.createElement(c.a,{exact:!0,path:t.url,component:U}),i.a.createElement(c.a,{exact:!0,path:"".concat(t.url,"/recipes"),render:function(e){return e.history.replace("/get"),i.a.createElement(U,e)}}),i.a.createElement(c.a,{path:"".concat(t.url,"/recipes/:id"),component:W}))},K=function(e){e.match;return i.a.createElement(A,null)},V=(a(51),function(){var e=i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:N}),i.a.createElement(c.a,{path:"/get",component:H}),i.a.createElement(c.a,{path:"/my",component:K}));return window.location.href.indexOf("localhost")>-1?function(e){return i.a.createElement(o.a,null,e)}(e):function(e){return i.a.createElement(o.b,null,e)}(e)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[29,1,2]]]);
//# sourceMappingURL=main.c94aef2a.chunk.js.map