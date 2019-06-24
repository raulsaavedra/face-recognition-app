import React from 'react';
import styled from 'styled-components';
const FaceRecognition = ({imageUrl, box}) => {
	return (
			<div className='flex justify-center ma'>
				<ImageDiv className='absolute mt2'>
					<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/> 
					<BoundingBox style={{top: box.topRow, right: box.rightCol,
	    bottom: box.bottomRow,
	    left: box.leftCol,
	    }}/>
				</ImageDiv>
			</div>

		)
}

const ImageDiv = styled.div.attrs({

})`
z-index: 100;
`

const BoundingBox = styled.div.attrs({
	className: ''
})`
		position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;

`
export default FaceRecognition;					