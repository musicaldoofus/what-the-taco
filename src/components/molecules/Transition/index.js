import React from 'react';
import { Link } from 'react-router-dom';

class Transition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFull: false
		};
	}
	
	componentDidMount() {
		window.setTimeout(() => this.setState({isFull: true}), 100);
	}
	
	render() {
		return (
			<div className="Transition">
				
			</div>
		);
	}
}
export default Transition;