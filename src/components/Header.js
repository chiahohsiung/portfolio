import React from 'react'
import NeonButtonSm from './NeonButtonSm'
import './Header.css'

export default function Header() {
  return (
    <div className='header' id='home'>
      <div className='container container-cln'>
        <div className='header__name'>I'm Jacky Hsiung</div>
        <div className="header__title">React Developer</div>
        <div className='container container-row'>
          <NeonButtonSm>More About Me</NeonButtonSm>
          <NeonButtonSm>Previous Projects</NeonButtonSm>
        </div>
      </div>
    </div>
  )
}