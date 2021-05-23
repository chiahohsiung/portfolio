import React from 'react'
import Card from './Card'
import './Work.css'
import musicApp from '../assets/img/music.png'
import manage from '../assets/img/manage.png'
import task from '../assets/img/task.png'


export default function Work() {
  const projects = [
    {
      imagePath: manage,
      title: 'Facility Management App',
      description: 'ontraq'
    },
    {
      imagePath: task,
      title: 'Performance Management App',
      description: 'htc'
    },
    {
      imagePath: musicApp,
      title: 'Music Tutorial Application',
      description: 'music-app'
    },

  ]
  const projectsContent = projects.map((project, index) => (
    <Card key={index} imagePath={project.imagePath} title={project.title} description={project.description}></Card>
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

