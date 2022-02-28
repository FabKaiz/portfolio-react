import React from 'react'
import { motion } from 'framer-motion';

import { BsMouse } from 'react-icons/bs'
import { BiDownArrowAlt, BiSend } from 'react-icons/bi'

import { Button } from '../../components'
import './Header.scss';

const Header = () => {
  const slideFromRight = {
    whileInView: { x: [200, 0], opacity: [0, 1] },
    transition: { duration: 1 }
  };

  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <motion.p
            variants={slideFromRight}
            whileInView={slideFromRight.whileInView}
            transition={{  duration: 1 }}
            >
            Je suis
          </motion.p>
          <motion.h1
            variants={slideFromRight}
            whileInView={slideFromRight.whileInView}
            transition={{  delay: 0.6, duration: 1 }}
          >
            Fabien Chareun
          </motion.h1>
          <motion.p
            variants={slideFromRight}
            whileInView={slideFromRight.whileInView}
            transition={{  delay: 1.4, duration: 0.8 }}
          >
            Développeur Web Front-end
          </motion.p>
          <Button
            title='Me Contacter'
            href='#contact'
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
      </div>
    </section>
  )
}

export default Header