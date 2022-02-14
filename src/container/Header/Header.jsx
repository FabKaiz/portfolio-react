import React from 'react'

import { BsMouse } from 'react-icons/bs'
import { BiDownArrowAlt, BiSend } from 'react-icons/bi'

import { Button } from '../../components'
import './Header.scss';

const Header = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <p>Je suis</p>
        <h1>Fabien Chareun</h1>
        <p>Développeur Web Front-end</p>
        <Button
          title='Me Contacter'
          scrollTo='#contact'
          logo={<BiSend />}
        />
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button">
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