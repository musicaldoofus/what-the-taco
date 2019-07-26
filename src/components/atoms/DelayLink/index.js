import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './TransitionLink.css';

const Transition = () => {
	return (
		<span className="transition-div"></span>
	);
}

class DelayLinkInner extends Component {
	static propTypes = {
		delay: PropTypes.number, //Milliseconds to wait before registering the click.
		onDelayStart: PropTypes.func, //Called after the link is clicked and before the delay timer starts.
		onDelayEnd: PropTypes.func, //Called after the delay timer ends.
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	static defaultProps = {
		delay: 0,
		onDelayStart: () => {},
		onDelayEnd: () => {}
	};

	static contextTypes = Link.contextTypes;

	constructor(props) {
		super(props);
		this.timeout = null;
		this.state = {
			show: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillUnmount() {
		if (this.timeout) clearTimeout(this.timeout);
	}

	handleClick(e) {
		const executeClick = () => {
			const { replace, to, delay, onDelayStart, onDelayEnd, history } = this.props;
			onDelayStart(e, to);
			if (e.defaultPrevented) return;
			e.preventDefault();
			window.setTimeout(() => {
				if (replace) history.replace(to);
				else history.push(to);
				onDelayEnd(e, to);
			}, delay);
		}
		this.setState({show: true});
		executeClick();
	}

	render() {
		const { staticContext, ...rest } = this.props; //avoid staticContext from being applied to DOM element
		const props = Object.assign({}, rest);
		delete props.delay;
		delete props.onDelayStart;
		delete props.onDelayEnd;
		return (
			<Fragment>
				<Link {...props} onClick={this.handleClick}/>
				{this.state.show && <Transition/>}
			</Fragment>
		);
	}
}

const DelayLink = withRouter(DelayLinkInner);

export default DelayLink;