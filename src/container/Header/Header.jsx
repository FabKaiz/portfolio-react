import React from 'react'

import { BsMouse } from 'react-icons/bs'
import { BiDownArrowAlt } from 'react-icons/bi'
import './Header.scss';

const Header = () => {
  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <h3 class="home__subtitle">Je suis</h3>
        <h1 class="home__title ">Fabien Chareun</h1>
        <p class="home__description">Développeur Web Front-end</p>
        <a href="#contact" class="button button--flex">
          Me contacter <i class="uil uil-message button__icon"></i>
        </a>
        <div class="home__scroll">
          <a href="#about" class="home__scroll-button button--flex">
            <BsMouse />
            <span class="home__scroll-name">Scroll-down</span>
            <BiDownArrowAlt />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header