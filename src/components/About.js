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
        <p>Hello, I'm Jacky. I love sharing my ideas and passions by building interactive web applications.</p>
      </div>
    </div>
  )
}

