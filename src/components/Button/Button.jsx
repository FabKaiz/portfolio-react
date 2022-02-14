import React from 'react'
import './Button.scss'

const Button = ({ scrollTo, title, logo }) => {
  return (
    <a href={scrollTo} className="button">
      {title} {logo}
    </a>
  )
}

export default Button