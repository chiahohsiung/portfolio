import React from 'react'
import './Card.css'

export default function Card(props) {
  const {imagePath, title} = props
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={imagePath} />
      </div>
      <div className='container container-cln'>
        <h2 className='title'>{title}</h2>
        <a>Learn More</a>
      </div>
      
    </div>
  )
}

