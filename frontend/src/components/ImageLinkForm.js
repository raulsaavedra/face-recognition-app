import React from 'react';
import styled from 'styled-components';
import {FaArrowDown} from 'react-icons/fa';



const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<FormDiv>
		    <FaArrowDown className='animated swing infinite dim white f1 mb2'/>
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
  className: 'flex-l justify-center pa4 br4 ba b--white bw2'
})`
		background:
		radial-gradient(black 15%, transparent 16%) 0 0,
		radial-gradient(black 15%, transparent 16%) 8px 8px,
		radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
		radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
		background-color:#282828;
		background-size:16px 16px;
`
const StyledInput = styled.input.attrs({
	className: 'input-reset bg-white shadow-5 pa2 pa3-m w-100'
})``

const StyledButton = styled.button.attrs({
	className: 'grow f4 fw8 link ph3 pv2 dib white bg-light-purple mt0-l mt2-m pointer'
})``

export default ImageLinkForm;