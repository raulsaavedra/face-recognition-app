import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt'
import logo from './logo.png'
const StyledLogo = styled.div.attrs({
	className: 'flex justify-center mv3'
})``

const Logo = () => {
	return (
			<StyledLogo>
				<Tilt className="Tilt br4 shadow-2 animated pulse infinite slow" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
				 <div className="Tilt-inner"><img src={logo}/></div>
				</Tilt>
			</StyledLogo>
		)
}

export default Logo;