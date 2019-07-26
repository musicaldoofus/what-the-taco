import React from 'react';
import { Link } from 'react-router-dom';
import DelayLink from '../DelayLink';
import './Button.css';

const Button = ({id, children, label, to, onClick, delay}) => {
	const btnLabel = children ? children : label;
	const btnId = id ? id : `${label ? label : to}-button`
	if (delay) return (
		<DelayLink id={btnId} to={to} delay={delay} className="btn">{btnLabel}</DelayLink>
	);
	if (to) return (
		<Link id={btnId} to={to} className="btn">{btnLabel}</Link>
	);
	return (
		<button id={btnId} className="btn" onClick={onClick}>{btnLabel}</button>
	);
};

export default Button;