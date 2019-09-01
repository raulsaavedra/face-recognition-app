import React from 'react';
import './Profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet
    }
  }
    onFormChange = (event) => {
      switch(event.target.name) {
        case 'user-name':
          this.setState({name: event.target.value})
          break;
        case 'user-age':
          this.setState({age: event.target.value})
          break;
        case 'user-pet':
          this.setState({pet: event.target.value})
          break;
        default:
          return;
      }
    }
    onProfileUpdate = (data) => {
      fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({formInput: data})
      }).then(resp => {
        this.props.toggleModal();
        this.props.loadUser({...this.props.user, ...data});
      }).catch(console.log)
    }
    render() {
      const {user} = this.props;
      const {name, age, pet} = this.state;
      return (
        <div className='profile-modal'>
        <article className="bg-white br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
                <div onClick={this.props.toggleModal} className="flex justify-end h2 pointer">X</div>
          <img src="http://tachyons.io/img/logo.jpg" className="h3 w3 dib" alt="avatar"/>
          <h1>{this.state.name}</h1>
          <h4>{`Images Submitted: ${user.entries}`}</h4>
          <p>{`Member since: ${new Date (user.joined).toLocaleDateString()}`}</p>
                  <label className="mt2 fw8" htmlFor="name">
                    Username:
                  </label>
                  <input
                    onChange={this.onFormChange}
                    className="pa2 ba hover-bg-black hover-white w-100"
                    type="text"
                    name="user-name"
                    id="user-name"
                  />
                  <label className="mt2 fw8" htmlFor="name">
                    Age:
                  </label>
                  <input
                    onChange={this.onFormChange}
                    className="pa2 ba hover-bg-black hover-white w-100"
                    type="text"
                    name="user-age"
                    id="user-age"
                  />
                  <label className="mt2 fw8" htmlFor="name">
                    Pet:
                  </label>
                  <input
                    onChange={this.onFormChange}
                    className="pa2 ba hover-bg-black hover-white w-100"
                    type="text"
                    name="user-pet"
                    id="user-pet"
                  />
                  <div className="mt4" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                   <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20' 
                   onClick={() => this.onProfileUpdate({name, age, pet})}
                   >
                   Save
                   </button>
                   <button onClick={this.props.toggleModal} className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'>
                   Cancel
                   </button>
                  </div> 
          </main>
        </article>
        </div>
      )
    }
  }

export default Profile