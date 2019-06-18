import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation';
import SignIn from '../components/SignIn';
import ImageLinkForm from '../components/ImageLinkForm';
import Logo from '../components/Logo';
import FaceRecognition from '../components/FaceRecognition';



const app = new Clarifai.App({
 apiKey: '74f5de8ee2d940df86a47eca0f0e32ff'
});

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      showResults: false,
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)

    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    this.setState({showResults: true});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err)) 
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <StyledParticles params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'signin'  
        ? <SignIn onRouteChange={this.onRouteChange}/>
        : <div>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
          <Logo showResults={this.state.showResults}/>
          </div>
        }
      </div>
    );
  }
}

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

const StyledParticles = styled(Particles)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`
export default App;
