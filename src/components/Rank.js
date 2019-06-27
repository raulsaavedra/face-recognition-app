import React from 'react';
import styled from 'styled-components';

const TextDiv = styled.div.attrs({
	className: 'mt4 dim white f3 fw9 b db mb2'
})``
const Rank = ({name, entries}) => {
	return (
		<div className ='flex justify-center'>
			<TextDiv>
				{`${name}, your current entry count is ${entries}`} 
			</TextDiv>
		</div>

		)
}

export default Rank