import React from 'react'
import Card from './Card'
import './Work.css'
import musicApp from '../assets/img/music.png'
import manage from '../assets/img/manage.png'
import order from '../assets/img/order.png'


export default function Work() {
  const projects = [
    {
      imagePath: manage,
      title: 'Facility Management App',
      description: 'OnTraq helps users to manage the readiness and compliance for dental and medical facilities.'
    },
    {
      imagePath: order,
      title: 'Smart Ordering System',
      description: 'The Smart Online Ordering System helps hospitality organizations to create digital menus, and manage ordering and payment.'
    },
    {
      imagePath: musicApp,
      title: 'Music Tutorial Application',
      description: 'The web application introduces the music theory and teachniques for improvisation and approaches behind improvisation, and provides an interactive playground to practice the techniques.',
      link: 'https://how-to-improvise.herokuapp.com/'
    },

  ]
  const projectsContent = projects.map((project, index) => (
    <Card key={index} imagePath={project.imagePath} title={project.title} description={project.description} link={project.link}></Card>
  ))
  return (
    <div className='work' id='work'>
      <div className='title'>
        <h1>Work</h1>
      </div>
      <div className='work-container container container-row'>
        {projectsContent}
      </div>
    </div>
  )
}

