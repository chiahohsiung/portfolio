import React, { useEffect } from 'react'
import './Card.css'

export default function Card(props) {
  const { imagePath, title, description } = props

  console.log(description)
  return (
    
    <div className='card'>
      <div className='card-img'>
        <img src={imagePath} />
      </div>
      <div className={`container container-cln ${description}`}>
        <h2 className='title'>{title}</h2>
        <a id="myBtn">Hover to Learn More</a>
      </div>




    </div>
  )
}

