import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header.attrs({
	className: 'o-70 pv4 bb b--black-10 bw3 shadow-5 '
})``
const StyledNav = styled.nav.attrs({
	className: 'flex justify-end tracked' 
})``
const StyledLink = styled.a.attrs({
	className: 'mr5 link dim underline pointer f3 f4-m black fw9'
})`
`
const Navigation = ({onRouteChange, isSignedIn}) => {
	return (
			
			<StyledHeader>
				<StyledNav>
					{isSignedIn 
					? <div>
						<StyledLink onClick={() => onRouteChange('signout')}>Sign Out</StyledLink>
						</div> 
					: <div>
						<StyledLink onClick={() => onRouteChange('signin')}>Sign In</StyledLink>
						<StyledLink onClick={() => onRouteChange('register')}>Register</StyledLink>
						</div> 
				}
				</StyledNav>
			</StyledHeader>
		)
}

export default Navigation;