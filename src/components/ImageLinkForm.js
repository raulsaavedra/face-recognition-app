import React from 'react';
import styled from 'styled-components';
import {FaArrowDown} from "react-icons/fa";


const ImageLinkForm = () => {
	return (
		<FormDiv>
		    <FormHeader for="name">Image link </FormHeader>
		    <FaArrowDown className='animated swing infinite dim black f1 mb2'/>
		    <FormInnerDiv>
			    <StyledInput id="name" type="text" aria-describedby="name-desc"/>
			    <button className='grow f4 link ph3 pv2 dib white bg-purple'>Submit</button>
		    </FormInnerDiv>
		 </FormDiv>

		)
}

const FormDiv = styled.form.attrs({
	className: 'pa4 black-80 shadow-5 br4'
})`
	margin: 2% 10%;
	
`
const FormHeader = styled.label.attrs({
	className: 'dim black f4 fw9 b db mb2'
})``
const FormInnerDiv = styled.div.attrs({
  className: 'flex-l justify-center pa4 br4'
})`
		background:
radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
background-size: 40px 60px;
`
const StyledInput = styled.input.attrs({
	className: 'input-reset bg-white shadow-5 pa2 mb2 db w-100'
})``



export default ImageLinkForm;