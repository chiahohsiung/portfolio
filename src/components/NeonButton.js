import React from 'react'
import './NeonButton.css'

export default function NeonButton(props) {
  return (
    <a href="#" class="neon-button">{props.children}</a>
  )
}