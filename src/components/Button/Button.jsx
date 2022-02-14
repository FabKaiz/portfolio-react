import React from 'react'
import './Button.scss'

const Button = ({ href, title, logo }) => {
  return (
    <a href={href} className="button">
      {title} {logo}
    </a>
  )
}

export default Button