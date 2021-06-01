import React, { useEffect } from 'react'
import './Project.css'

export default function Project(props) {
  const { imagePath, title, description } = props

  console.log(description)
  return (
    
    <div className='project container container-row'>
      <div className='card__description container container-cln'>
        <h2 className='title'>{title}</h2>
        <p>{description}</p>
      </div>
      
      <img src={imagePath} />
    </div>
  )
}

