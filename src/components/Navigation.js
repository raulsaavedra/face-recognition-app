import React from 'react';
import styled from 'styled-components';
import ProfileIcon from './ProfileIcon';

const StyledHeader = styled.header.attrs({
	className: 'o-70 pv4 bb b--black-10 bw3 shadow-5 '
})``
const StyledNav = styled.nav.attrs({
	className: 'flex justify-center tracked' 
})``
const StyledLink = styled.a.attrs({
	className: 'mr5 link dim underline pointer f3 f4-m black fw9'
})`
`
const Navigation = ({onRouteChange, isSignedIn, toggleModal}) => {
	return (
			
			<StyledHeader>
				<StyledNav>
					{isSignedIn 
					? <div>
						<ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal}/>
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