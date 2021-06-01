import React from 'react'
import NeonButtonSm from './NeonButtonSm'
import './Header.css'
import blob from '../assets/img/blob.svg'
import blob2 from '../assets/img/blob2.svg'
import blob3 from '../assets/img/blob3.svg'
export default function Header() {
  return (
    <>
      <div className='header' id='home'>
        <div className='container container-cln header-container'>
          <div className='header__name'>I'm Jacky Hsiung</div>
          <div className="header__title">React Developer</div>
          <div className='container container-row'>
            <a className='header__btn' href='#work'>Previous Projects</a>
            <a className='header__btn' href='#about'>More About Me</a>
          </div>

        </div>

      </div>
      {/* <div className='container container-row svg-container'>
        <img className='header__img svg--pink' src={blob2} />
        <img className='header__img svg--blue' src={blob} />
        
      </div> */}
      <div className='container--grid svg-container'>
        <img className='header__img svg--pink' src={blob2} />
        <img className='header__img svg--blue' src={blob} />
        <img className='header__img svg--blue' src={blob} />
        <img className='header__img svg--orange' src={blob3} />
        <img className='header__img svg--orange' src={blob3} />
        <img className='header__img svg--pink' src={blob2} />
      </div>

    </>
  )
}