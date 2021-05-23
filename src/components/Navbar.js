import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.myFunction = this.myFunction.bind(this)
  }
  myFunction() {
    console.log('hi')
    var x = document.getElementById("myTopnav");
    console.log(x)
    if (x.className === "topnav") {

      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  render() {
    return (
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onClick={()=>this.myFunction()}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}

export default Navbar;