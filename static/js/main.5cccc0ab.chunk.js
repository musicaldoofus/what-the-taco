(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/stock-taco-2.9b4a95a7.jpg"},,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/WhatTheTacoLogo.dd029ff3.svg"},function(e,t,n){e.exports=n.p+"static/media/WhatTheTacoLogoText.54f8769b.svg"},function(e,t,n){e.exports=n.p+"static/media/magnifying-glass.595cd6ce.svg"},function(e,t,n){e.exports=n(51)},,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/stock-taco-1.db6dc55f.webp"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),c=n.n(r),l=n(4),o=n(7),s=n(8),u=n(9),d=n(12),m=n(10),p=n(11),h=n(6),E=n(23),f=(n(34),function(){return i.a.createElement("span",{className:"transition-div"})}),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).timeout=null,n.state={show:!1},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"handleClick",value:function(e){var t=this;this.setState({show:!0}),function(){var n=t.props,a=n.replace,i=n.to,r=n.delay,c=n.onDelayStart,l=n.onDelayEnd,o=n.history;c(e,i),e.defaultPrevented||(e.preventDefault(),window.setTimeout(function(){a?o.replace(i):o.push(i),l(e,i)},r))}()}},{key:"render",value:function(){var e=this.props,t=(e.staticContext,Object(E.a)(e,["staticContext"])),n=Object.assign({},t);return delete n.delay,delete n.onDelayStart,delete n.onDelayEnd,i.a.createElement(a.Fragment,null,i.a.createElement(l.c,Object.assign({},n,{onClick:this.handleClick})),this.state.show&&i.a.createElement(f,null))}}]),t}(a.Component);v.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},v.contextTypes=l.c.contextTypes;var g=Object(o.f)(v),b=(n(39),function(e){var t=e.id,n=e.children,a=e.label,r=e.to,c=e.onClick,o=e.delay,s=n||a,u=t||"".concat(a||r,"-button");return o?i.a.createElement(g,{id:u,to:r,delay:o,className:"btn"},s):r?i.a.createElement(l.c,{id:u,to:r,className:"btn"},s):i.a.createElement("button",{id:u,className:"btn",onClick:c},s)}),y=(n(40),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={isScrolledDown:!1},e.handleScroll=e.handleScroll.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleScroll",value:function(){document.body.scrollTop>64||document.documentElement.scrollTop>64?this.setState({isScrolledDown:!0}):this.setState({isScrolledDown:!1})}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){return e.handleScroll()}}},{key:"render",value:function(){var e=i.a.createElement(b,{to:"/get"},"get"),t=i.a.createElement(b,{to:"/my"},"my"),n="nav".concat(this.state.isScrolledDown?" sm":" md");return i.a.createElement("nav",{name:"navigation bar",className:n,role:"navigation",id:"nav-bar"},i.a.createElement("div",{className:"navbar-inner-container"},e,t))}}]),t}(a.Component)),k=(n(41),function(){return i.a.createElement("div",{className:"footer",role:"footer"},i.a.createElement("div",null,i.a.createElement("p",{className:"sm muted"},"copyright 2019 what the taco")))}),w=(n(42),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={fading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.setTimeout(function(){return e.setState({fading:!1})},500),window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement(y,null),i.a.createElement("main",null,this.props.children),i.a.createElement(k,null))}}]),t}(a.Component)),O=n(26),S=n.n(O),j=n(27),C=n.n(j),N=(n(43),function(e){return i.a.createElement(w,null,i.a.createElement("div",{style:{width:"100%"},className:"flex-div"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:"Get and save tacos with What the Taco!",src:S.a})),i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:"What the Taco",src:C.a}))),i.a.createElement("div",{style:{width:"100%",display:"flex"}},i.a.createElement(b,{to:"/get"},"get tacos")))}),x=n(28),D=n.n(x),T=(n(44),function(e){var t=e.handleOnChange,n=e.inputValue,a=e.handleOnBlur,r=e.name,c=e.placeholder;return i.a.createElement("div",{className:"input-container"},i.a.createElement("div",{className:"input-icon"},i.a.createElement("img",{src:D.a,alt:"Search for taco recipes by keyword."})),i.a.createElement("input",{name:r||"input",placeholder:c||"",type:"text",onChange:t,value:n,onBlur:a,onKeyPress:function(e){return 13===e.keyCode?a:void 0}}))}),B=(n(45),function(e){var t=e.id,n=e.imgSrc,a=e.label,r=e.description,c=(e.ingredients,e.prepDuration),l=(e.recipeSteps,e.match);return i.a.createElement("div",{id:"recipe ".concat(a,"-").concat(t),className:"recipe-card box-shadow"},i.a.createElement("div",null,i.a.createElement("img",{src:n,alt:a})),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-label"},i.a.createElement("h3",null,a)),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-duration"},i.a.createElement("p",{className:"muted sm"},c)),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-description"},i.a.createElement("p",null,i.a.createElement("span",{className:"paragraph-trim"},r))),i.a.createElement("span",{id:"spacer-row"}),i.a.createElement("div",{id:"recipe-view-button"},i.a.createElement(b,{to:"".concat(l.url,"/recipes/").concat(t)},"get this taco")))}),F=(n(46),n(14)),W=n.n(F),V="tortilla",I="red cabbage",P="chicken",J=[{id:0,label:"chicken tinga",prepDuration:"30 minutes",description:"Super duper saucerini chicken-tini.",imgSrc:W.a,ingredients:[V,I,P],recipeSteps:[{label:"Before doing something, do this first. Then, do that."}]},{id:1,label:"chicken tinga",prepDuration:"30 minutes",description:"Super duper saucerini chicken-tini.",imgSrc:W.a,ingredients:[V,I,P],recipeSteps:[{label:"Before doing something, do this first. Then, do that."}]},{id:2,label:"chicken tinga",prepDuration:"30 minutes",description:"Super duper saucerini chicken-tini.",imgSrc:W.a,ingredients:[V,I,P],recipeSteps:[{label:"Before doing something, do this first. Then, do that."}]},{id:3,label:"chicken tinga",prepDuration:"30 minutes",description:"Super duper saucerini chicken-tini.",imgSrc:W.a,ingredients:[V,I,P],recipeSteps:[{label:"Before doing something, do this first. Then, do that."}]},{id:4,label:"chicken tinga",prepDuration:"30 minutes",description:"Super duper saucerini chicken-tini.",imgSrc:W.a,ingredients:[V,I,P],recipeSteps:[{label:"Before doing something, do this first. Then, do that."}]},{id:5,label:"chicken tinga",prepDuration:"30 minutes",description:"Super duper saucerini chicken-tini.",imgSrc:W.a,ingredients:[V,I,P],recipeSteps:[{label:"Before doing something, do this first. Then, do that."}]}],K=(n(47),function(e,t){return i.a.createElement("span",{key:"".concat(e).concat(t)},e)}),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).toRecipeCard=function(e){return i.a.createElement(B,Object.assign({key:e.id,match:n.props.match},e))},n.state={inputValue:"",includedFilters:Object.keys(J[0]),inputFilters:[]},n.handleOnChange=n.handleOnChange.bind(Object(h.a)(n)),n.isInFilter=n.isInFilter.bind(Object(h.a)(n)),n.handleOnBlur=n.handleOnBlur.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"isInFilter",value:function(e){var t=this;this.state.inputValue;return this.state.includedFilters.filter(function(t){return"string"===typeof e[t]}).some(function(n){return t.state.inputFilters.filter(function(t){return e[n].indexOf(t)>-1})})}},{key:"handleOnChange",value:function(e){var t=e.target.value,n=" "==t.charAt(t.length-1),a=n?"":t,i=n?this.state.inputFilters.concat(t.split(" ")):this.state.inputFilters;this.setState({inputValue:a,inputFilters:i})}},{key:"handleOnBlur",value:function(e){var t=this.state.inputFilters.concat(e.target.value.split(" "));this.setState({inputFilters:t,inputValue:""})}},{key:"render",value:function(){var e=this,t=J.filter(this.isInFilter).map(this.toRecipeCard),n=this.state.inputFilters.map(K);return i.a.createElement(w,null,i.a.createElement("div",{role:"banner"},i.a.createElement("div",null,i.a.createElement("h1",null,"get  tacos")),i.a.createElement("div",null,i.a.createElement("h4",{className:"light"},"browse"),i.a.createElement("span",null),i.a.createElement("h4",{className:"light"},"customize"),i.a.createElement("span",null),i.a.createElement("h4",{className:"light"},"save"))),i.a.createElement("div",{style:{margin:"40px 0"}},i.a.createElement("div",{className:"input-container"},n,i.a.createElement(T,{type:"text",onChange:this.handleOnChange,value:this.state.inputValue,onBlur:this.handleOnBlur,onKeyPress:function(t){return 13===t.keyCode?e.handleOnBlur:void 0}}))),i.a.createElement("div",{className:"recipes-container"},t))}}]),t}(a.Component),M=(n(48),function(e){var t=e.ingredient;return i.a.createElement("span",{className:"ingredient"},t)}),R=(n(49),function(e){return i.a.createElement(M,{key:e,ingredient:e})}),z=function(e){var t=e.match;console.log(t.params.id);var n=J[t.params.id],a=(n.id,n.label),r=n.prepDuration,c=n.imgSrc,o=n.description,s=n.ingredients,u=(n.recipeSteps,s.map(R));return console.log(u),i.a.createElement(w,null,i.a.createElement("div",{id:"back-to-recipes"},i.a.createElement(l.c,{to:"/get"},"\u2190 back to recipes")),i.a.createElement("div",{id:"recipe-title"},i.a.createElement("div",null,i.a.createElement("h1",null,a)),i.a.createElement("div",null,i.a.createElement("p",{className:"sm muted"},r))),i.a.createElement("div",{id:"recipe-img"},i.a.createElement("img",{src:c,alt:a})),i.a.createElement("section",null,i.a.createElement("div",{id:"overview-header"},i.a.createElement("h2",null,"overview")),i.a.createElement("div",{id:"overview"},i.a.createElement("p",null,o))),i.a.createElement("section",null,i.a.createElement("div",{id:"ingredients-header"},i.a.createElement("h2",null,"ingredients")),i.a.createElement("div",{id:"ingredients"},u)),i.a.createElement("section",null,i.a.createElement("div",{id:"directions-header"}),i.a.createElement("div",{id:"directions"})))},A=function(e){var t=e.match;return i.a.createElement(a.Fragment,null,i.a.createElement(o.a,{exact:!0,path:t.url,component:L}),i.a.createElement(o.a,{exact:!0,path:"".concat(t.url,"/recipes"),render:function(e){return e.history.replace("/get"),i.a.createElement(L,e)}}),i.a.createElement(o.a,{path:"".concat(t.url,"/recipes/:id"),component:z}))},G=function(e){e.match;return i.a.createElement(w,null)},U=(n(50),function(){var e=i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/",component:N}),i.a.createElement(o.a,{path:"/get",component:A}),i.a.createElement(o.a,{path:"/my",component:G}));return window.location.href.indexOf("localhost")>-1?function(e){return i.a.createElement(l.a,null,e)}(e):function(e){return i.a.createElement(l.b,null,e)}(e)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[29,1,2]]]);
//# sourceMappingURL=main.5cccc0ab.chunk.js.map