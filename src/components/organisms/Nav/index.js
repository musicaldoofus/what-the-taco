import React, { Component } from 'react';
import Button from '../../atoms/Button';
import './Nav.css';

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			isScrolledDown: false
		};
		this.handleScroll = this.handleScroll.bind(this);
	}
	
	handleScroll() {
		if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) this.setState({isScrolledDown: true});
		else this.setState({isScrolledDown: false});
	}
	
	componentDidMount() {
		window.onscroll = () => this.handleScroll();
	}
	
	render() {
		const getBtn = <Button to="/get">get</Button>;
		const myBtn = <Button to="/my">my</Button>;
		const navClassNames = `nav${this.state.isScrolledDown ? ' sm' : ' md'}`;
		return (
			<nav name="navigation bar" className={navClassNames} role="navigation" id="nav-bar">
				<div className="navbar-inner-container">
					{getBtn}
					{myBtn}
				</div>
			</nav>
		);
	}
}

export default Nav;