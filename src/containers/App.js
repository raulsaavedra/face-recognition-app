import React from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import ImageLinkForm from '../components/ImageLinkForm';
import Logo from '../components/Logo';

/* import FaceRecognition from './FaceRecognition'; */
function App() {
  return (
    <div className="App">
      <Navigation/>
      <ImageLinkForm/>
      <Logo/>
      {/* <FaceRecognition/> 
      */}
    </div>
  );
}

export default App;
