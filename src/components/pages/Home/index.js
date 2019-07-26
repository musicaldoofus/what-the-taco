import React from 'react';
import Page from '../';
import Button from '../../atoms/Button';
import WhatTheTacoLogo from '../../../media/img/WhatTheTacoLogo.svg';
import WhatTheTacoLogoText from '../../../media/img/WhatTheTacoLogoText.svg';
import './Home.css';

const Home = (props) => {
	return (
		<Page>
			<div style={{width: '100%'}} className="flex-div">
				<div className="img-container">
					<img alt="Get and save tacos with What the Taco!" src={WhatTheTacoLogo}/>
				</div>
				<div className="img-container">
					<img alt="What the Taco" src={WhatTheTacoLogoText}/>
				</div>
			</div>
			<div style={{width: '100%', display: 'flex'}}>
				<Button to="/get">
					get tacos
				</Button>
			</div>
		</Page>
	);
}

export default Home;