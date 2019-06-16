import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header.attrs({
	className: 'bg-green o-70 pv4 bb b--black bw3 shadow-5 '
})``
const StyledNav = styled.nav.attrs({
	className: 'tracked'
})``
const StyledLink = styled.a.attrs({
	className: 'dib mr6-l mr5-m mr4-ns f4 f5-m white fw8'
})``
const Navigation = () => {
	return (
			<StyledHeader>
				<StyledNav>
					<StyledLink>Sign in</StyledLink>
					<StyledLink>How it works</StyledLink>
					<StyledLink>About </StyledLink>
				</StyledNav>
			</StyledHeader>
		)
}

export default Navigation;