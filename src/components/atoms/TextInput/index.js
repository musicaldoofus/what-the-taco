import React from 'react';
import magnifyingGlass from '../../../media/img/magnifying-glass.svg';
import './TextInput.css';

const TextInput = ({handleOnChange, inputValue, handleOnBlur, name, placeholder}) => (
	<div className="input-container">
		<div className="input-icon">
			<img src={magnifyingGlass} alt="Search for taco recipes by keyword."/>
		</div>
		<input name={name ? name : 'input'} placeholder={placeholder ? placeholder : ''} type="text" onChange={handleOnChange} value={inputValue} onBlur={handleOnBlur} onKeyPress={e => e.keyCode === 13 ? handleOnBlur : undefined}/>
	</div>
);

export default TextInput;