import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import ImageLinkForm from '../components/ImageLinkForm';
import Logo from '../components/Logo';
import Rank from '../components/Rank';
import FaceRecognition from '../components/FaceRecognition';



const app = new Clarifai.App({
 apiKey: '484a366ba7394ca1a999c491a36eb36e'
});

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      showResults: false,
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: '',
        joined: '',
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined,
    }})
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
      .then(response => {
        if (response) {
            fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}))
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err)) 
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn : false})
    } else if (route === 'home') {
      this.setState({isSignedIn : true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box, showResults} = this.state;
    return (
      <div className="App">
        <StyledParticles params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {route === 'home'  
        ? <div>
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition box={box} imageUrl={imageUrl}/> 
          <Logo showResults={showResults}/>
          </div> 
        : (
          route === 'signin' 
          ?  <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
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
