import React from 'react'
import NeonButtonSm from './NeonButtonSm'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='container container-cln'>
        <div className='header__name'>I'm Jacky Hsiung</div>
        <div className="typewriter">
          <h1>React Developer</h1>
        </div>
        <div className='container container-row'>
          <NeonButtonSm>More About Me</NeonButtonSm>
          <NeonButtonSm>Previous Projects</NeonButtonSm>
        </div>
      </div>
    </div>
  )
}