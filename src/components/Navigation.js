import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header.attrs({
	className: 'o-70 pv4 bb b--black-10 bw3 shadow-5 '
})``
const StyledNav = styled.nav.attrs({
	className: 'tracked flex justify-center'
})``
const StyledLink = styled.a.attrs({
	className: 'link dim underline pointer f3 f4-m black fw9'
})`
	margin-left: 11%;
	margin-right: 5%;
`
const Navigation = () => {
	return (
			<StyledHeader>
				<StyledNav>
					<StyledLink>Sign in</StyledLink>
					<StyledLink>Sign up</StyledLink>
					<StyledLink>How it works</StyledLink>
				</StyledNav>
			</StyledHeader>
		)
}

export default Navigation;