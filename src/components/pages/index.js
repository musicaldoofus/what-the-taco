import React, { Component } from 'react';
import Nav from '../organisms/Nav';
import Footer from '../organisms/Footer';
import './Page.css';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fading: true
		};
	}
	
	componentDidMount() {
		window.setTimeout(() => this.setState({fading: false}), 500);
		window.scrollTo(0, 0);
	}
	
	render() {
		return (
			<div className="page">
				<Nav/>
				<main>{this.props.children}</main>
				<Footer/>
			</div>
		);
	}
}

export default Page;