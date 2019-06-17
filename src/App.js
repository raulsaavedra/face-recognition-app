import React from 'react';
import './App.css';
import Navigation from './Navigation';
import ImageLinkForm from './ImageLinkForm';
/* import Logo from './Logo';
import FaceRecognition from './FaceRecognition'; */
function App() {
  return (
    <div className="App">
      <Navigation/>
      <ImageLinkForm/>
      {/* <Logo/>
      <FaceRecognition/> 
      */}
    </div>
  );
}

export default App;
