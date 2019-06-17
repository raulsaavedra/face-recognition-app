import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header.attrs({
	className: 'o-70 pv4 bb b--black-10 bw3 shadow-5 '
})``
const StyledNav = styled.nav.attrs({
	className: 'tracked flex justify-center'
})``
const StyledLink = styled.a.attrs({
	className: 'link dim underline pointer f4 f5-m black fw8'
})`
	margin-left: 8%;
	margin-right: 5%;
`
const Navigation = () => {
	return (
			<StyledHeader>
				<StyledNav>
					<StyledLink>Sign in</StyledLink>
					<StyledLink>Register</StyledLink>
					<StyledLink>How it works</StyledLink>
				</StyledNav>
			</StyledHeader>
		)
}

export default Navigation;