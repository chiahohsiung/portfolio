import React from 'react'
import './About.css'
import chiaho from '../assets/img/team/chiaho3.jpg'

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='title'>
        <h1>About</h1>
      </div>
      <div className='about-content'>
        <img src={chiaho}/>
        <h1>Jacky Hsiung</h1>
        <p>Hello, I'm Jacky. During my 5 years of experience in front-end development, I've designed, developed, and tested web applications to solve real-world problems in various industries. In my spare time, I love sharing my ideas and passions by building interactive web applications.</p>
      </div>
    </div>
  )
}

