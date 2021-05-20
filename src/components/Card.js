import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <div className='card'>
      <div className='card-img'>
        <h3>Image</h3>
      </div>
      <div>
        <h2>Title</h2>
      </div>
      <button>Learn More</button>
    </div>
  )
}

