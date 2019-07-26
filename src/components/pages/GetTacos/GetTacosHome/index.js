import React, { Component } from 'react';
import Page from '../../';
import TextInput from '../../../atoms/TextInput';
import Button from '../../../atoms/Button';
import RecipeCard from '../../../molecules/RecipeCard';
import tacos from '../../../../utils/tacos';
import './GetTacosHome.css';

const toInputFilterBtn = (label, i) => <span key={`${label}${i}`}>{label}</span>;

class GetTacosHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			includedFilters: Object.keys(tacos[0]),
			inputFilters: []
		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.isInFilter = this.isInFilter.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
	}
	
	toRecipeCard = (r) => <RecipeCard key={r.id} match={this.props.match} {...r}/>;
	
	isInFilter(props) {
		const isStr = (s) => typeof props[s] === 'string';
		const val = this.state.inputValue;
		//all fucked
		const isInInputFilters = (f) => this.state.inputFilters.filter(i => props[f].indexOf(i) > -1);
		const isInProps = (f) => props[f].indexOf(val) > -1;
		const retVal = this.state.includedFilters
			.filter(isStr)
			.some(isInInputFilters);
		return retVal;
	}
	
	handleOnChange(e) {
		const target = e.target.value
		const isSpace = target.charAt(target.length - 1) == ' ';
		const inputValue = isSpace ? '' : target;
		const inputFilters = isSpace ? this.state.inputFilters.concat(target.split(' ')) : this.state.inputFilters;
		this.setState({
			inputValue,
			inputFilters
		});
	}
	
	handleOnBlur(e) {
		const inputFilters = this.state.inputFilters.concat(e.target.value.split(' '));
		this.setState({inputFilters, inputValue: ''});
	}
	
	render() {
		const visibleRecipes = tacos.filter(this.isInFilter).map(this.toRecipeCard);
		const inputFilterList = this.state.inputFilters.map(toInputFilterBtn);
		return (
			<Page>
				<div role="banner">
					<div>
						<h1>get  tacos</h1>
					</div>
					<div>
						<h4 className="light">browse</h4>
						<span></span>
						<h4 className="light">customize</h4>
						<span></span>
						<h4 className="light">save</h4>
					</div>
				</div>
				<div style={{margin: '40px 0'}}>
					<div className="input-container">
						{inputFilterList}
						<TextInput type="text" onChange={this.handleOnChange} value={this.state.inputValue} onBlur={this.handleOnBlur} onKeyPress={e => e.keyCode === 13 ? this.handleOnBlur : undefined}/>
					</div>
				</div>
				<div className="recipes-container">
					{visibleRecipes}
				</div>
			</Page>
		);
	}
}

export default GetTacosHome;