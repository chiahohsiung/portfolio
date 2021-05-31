import React from 'react'
import './Navbar.css'
import logo from '../assets/img/logo.png';
class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="navbar" id="myTopnav">
        <img src={logo}/>
        <a href="#home" class="active">Home</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
      </div>
    )
  }
}

export default Navbar;