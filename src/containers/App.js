import React from 'react';
import './App.css';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation';
import ImageLinkForm from '../components/ImageLinkForm';
import Logo from '../components/Logo';

/* import FaceRecognition from './FaceRecognition'; */

const particlesOptions = {
  particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

function App() {
  return (
    <div className="App">
      <StyledParticles params={particlesOptions}/>
      <Navigation/>
      <ImageLinkForm/>
      <Logo/>
      {/* <FaceRecognition/> 
      */}
    </div>
  );
}

const StyledParticles = styled(Particles)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`
export default App;
