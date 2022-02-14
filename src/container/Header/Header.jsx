import React from 'react'

import { BsMouse } from 'react-icons/bs'
import { BiDownArrowAlt, BiSend } from 'react-icons/bi'
import './Header.scss';

const Header = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h3>Je suis</h3>
        <h1>Fabien Chareun</h1>
        <p>Développeur Web Front-end</p>
        <a href="#contact" className="button button--flex">
          Me contacter <BiSend />
        </a>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <BsMouse />
            <span className="home__scroll-name">Scroll-down</span>
            <BiDownArrowAlt />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header