import React from 'react'
import './SkillCard.css'

export default function SkillCard(props) {
  const {imgPath, title} = props
  return (
    <div className='skill-card'>
      <div className='card-img'>
        <img src={imgPath}/>
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

