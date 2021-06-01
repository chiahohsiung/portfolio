import React, { useEffect } from 'react'
import './Card.css'

export default function Card(props) {
  const { imagePath, title, description, link } = props

  console.log(link)
  let anchorTag;
  if (link) {
    anchorTag = <a href={link} target='_blank'>Try It!</a>
  }
  return (
    
    <div className='card'>
      <div className='card-img'>
        <img src={imagePath} />
      </div>
      <div className={`container container-cln `}>
        <h2 className='title'>{title}</h2>
        <p className='card__description'>{description}{anchorTag}</p>
        
      </div>
    </div>
  )
}

