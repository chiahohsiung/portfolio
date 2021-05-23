import React from 'react'
import './NeonButton.css'

export default function NeonButton(props) {
  return (
    <a href={`#${props.id}`} class="neon-button">{props.children}</a>
  )
}