import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt'
import logo from './logo.png'
const StyledLogo = styled.div.attrs({
	className: 'flex justify-center mv3'
})`
	
`
const StyledTilt = styled(Tilt).attrs({
	className: 'Tilt br4 shadow-2'
})`
	background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59)
`
const Logo = ({showResults}) => {
	return (
			<div> { this.state.showResults ? null : (
			<StyledLogo>
				<StyledTilt options={{ max : 25 }} style={{ height: 250, width: 250 }} >
				 <div className="Tilt-inner"><img alt='' src={logo}/></div>
				</StyledTilt>
			</StyledLogo>
			)}
			</div>
		)
}

export default Logo;