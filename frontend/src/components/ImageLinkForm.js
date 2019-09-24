import React from 'react';
import styled from 'styled-components';
import {FaArrowDown} from 'react-icons/fa';



const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<FormDiv>
		    <FaArrowDown className='animated swing infinite dim black f1 mb2'/>
		    <FormInnerDiv>
			    <StyledInput 
			    	id='name' 
			    	type='text'
			    	aria-describedby='name-desc'
						onChange={onInputChange}
						placeholder='Enter any image url here!'
			    />
			    <StyledButton
			    type={'button'}
			    onClick={onButtonSubmit}	
			    	>
			    Detect
			    </StyledButton>
		    </FormInnerDiv>
		 </FormDiv>

		)
}

const FormDiv = styled.form.attrs({
	className: 'pa4 black-80 shadow-5 br4'
})`
	margin: 2% 10%;
	
`

const FormInnerDiv = styled.div.attrs({
  className: 'flex-l justify-center pa4 br4'
})`
		background:
    radial-gradient(black 3px, transparent 4px),
    radial-gradient(black 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
    #fff;
    background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
`
const StyledInput = styled.input.attrs({
	className: 'input-reset bg-white shadow-5 pa2 pa3-m w-100'
})``

const StyledButton = styled.button.attrs({
	className: 'grow f4 fw8 link ph3 pv2 dib white bg-light-purple mt0-l mt2-m pointer'
})``

export default ImageLinkForm;