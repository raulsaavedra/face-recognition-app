import React from 'react';
import styled from 'styled-components';

const TextDiv = styled.div.attrs({
	className: 'dim black f4 fw9 b db mb2'
})``
const Rank = () => {
	return (
		<div className ='flex justify-center'>
			<TextDiv>
				{'Raul, your current rank is ' + '5'} 
			</TextDiv>
		</div>

		)
}

export default Rank