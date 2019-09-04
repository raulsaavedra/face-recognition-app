import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import ImageLinkForm from '../components/ImageLinkForm';
import Logo from '../components/Logo';
import Rank from '../components/Rank';
import Modal from '../components/Modal'
import Profile from '../components/Profile'
import FaceRecognition from '../components/FaceRecognition';





const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  showResults: false,
  route: 'signin',
  isSignedIn: false,
  isProfileOpen: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: '',
    joined: '',
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if(data && data.id) {
            console.log('success, get user profile')
          }
        })
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

  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box
      const image = document.getElementById('inputimage')
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('http://localhost:3000/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
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
            .catch(console.log)
        }
        this.displayFaceBoxes(this.calculateFaceLocations(response))
      })
      .catch(err => console.log(err)) 
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn : true})
    }
    this.setState({route: route});
  }
  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen
    }))
  }
  render() {
    const { isSignedIn, imageUrl, route, boxes, showResults, isProfileOpen, user} = this.state;
    return (
      <div className="App">
        <StyledParticles params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}
        toggleModal={this.toggleModal} />
        { isProfileOpen && 
          <Modal>
            <Profile 
            isProfileOpen={isProfileOpen} 
            toggleModal={this.toggleModal} 
            loadUser={this.loadUser}
            user={user}/>
          </Modal>
        }
        {route === 'home'  
        ? <div>
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition boxes={boxes} imageUrl={imageUrl}/> 
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
