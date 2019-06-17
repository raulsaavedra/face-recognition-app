import React from 'react';
import styled from 'styled-components';
import {FaArrowDown} from "react-icons/fa";

const StyledForm = styled.form.attrs({
	className: 'pa4 black-80'
})`
	margin: 0 10%;
`
const StyledInput = styled.input.attrs({
	className: 'input-reset ba bw4 b--black-60 pa2 mb2 db w-100'
})``

const ImageLinkForm = () => {
	return (
		<StyledForm>
		    <label for="name" className="f4 b db mb2">Image link </label>
		    <FaArrowDown className='f1 mb2'/>
		    <StyledInput id="name" type="text" aria-describedby="name-desc"/>
		    <small id="name-desc" className="f6 black-60 db mb2">My app will recognize the faces from the pictures.</small>
		 </StyledForm>

		)
}

export default ImageLinkForm;