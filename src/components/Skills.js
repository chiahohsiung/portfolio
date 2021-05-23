import React from 'react'
import './Skills.css'
import SkillCard from './SkillCard'
import python from '../assets/img/python.png'
import js from '../assets/img/js.png'
import tensorflow from '../assets/img/tensorflow.png'
import pytorch from '../assets/img/pytorch.png'
import react from '../assets/img/react3.png'
import ts from '../assets/img/ts.png'
import node from '../assets/img/nodejs.png'
import redux from '../assets/img/redux.png'
import graphql from '../assets/img/graphql.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import scrum from '../assets/img/scrum.png'
import git from '../assets/img/Git.png'


export default function Skills() {

  const skills = [
    {
      imgPath: js,
      title: 'Javascript'
    },
    {
      imgPath: ts,
      title: 'Typescript'
    },
    {
      imgPath: html,
      title: 'Html'
    },
    {
      imgPath: css,
      title: 'CSS'
    },
    {
      imgPath: react,
      title: 'React.js'
    },
    {
      imgPath: redux,
      title: 'Redux'
    },
    
    {
      imgPath: node,
      title: 'Node'
    },
    {
      imgPath:graphql,
      title: 'GraphQL'
    },
    {
      imgPath: scrum,
      title: 'Agile/Scrum'
    },
    {
      imgPath: git,
      title: 'Git'
    },
    {
      imgPath: python,
      title: 'Python'
    },
    {
      imgPath: tensorflow,
      title: 'TensorFlow'
    },
    {
      imgPath: pytorch,
      title: 'PyTorch'
    },
  ]

  const skillsContent = skills.map((skill, index) => <SkillCard key={index} imgPath={skill.imgPath} title={skill.title} />)
  return (
    <div className='skills' id='skills'>
      <div className='title'>
        <h1>Skills</h1>
      </div>
      <div className='container container-row skills-container'>
        {skillsContent}
      </div>
    </div>
  )
}

