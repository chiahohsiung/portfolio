import React from 'react'
import Card from './Card'
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <div className='title'>
        <h1>Work</h1>
      </div>
      <div className='container container-row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

