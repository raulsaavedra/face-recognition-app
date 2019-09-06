import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  signOut = () => {
    window.sessionStorage.clear();
    this.props.onRouteChange('signout')
  } 
  render() {
    return (
      <div className="tc dib">
      <Dropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
         <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dim pointer" alt="avatar"/>
        </DropdownToggle>
        <DropdownMenu className="shadow-5">
          <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
          <DropdownItem onClick={() => this.signOut()}>Signout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>

      );
  }
}

export default ProfileIcon