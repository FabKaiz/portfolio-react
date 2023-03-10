import { motion } from 'framer-motion'

import { SiNotion, SiGithub } from 'react-icons/si'
import { Button } from '../../components'
import { images } from '../../constants'
import './About.scss'

const About = () => {
  const slideFromLeft = {
    whileInView: { x: [-100, 0], opacity: [0, 1] },
    transition: { duration: 1 }
  }

  const slideFromRight = {
    whileInView: { x: [100, 0], opacity: [0, 1] },
    transition: { duration: 1 }
  }

  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>À propos</h2>
      <span className='section__subtitle'>Présentation</span>
      <div className='about__container'>
        <motion.img
          variants={slideFromLeft}
          whileInView={slideFromLeft.whileInView}
          viewport={{ once: true }}
          src={images.meAbout}
          alt='me at le wagon'
          className='about__img'
          loading='lazy'
        />

        <motion.div
          variants={slideFromRight}
          whileInView={slideFromRight.whileInView}
          viewport={{ once: true }}
          className='about__content'
        >
          <p>
            Développeur web spécialisé dans le <strong>Front-end</strong>, issu de la formation Le Wagon à Lyon et du
            parcours <strong>JavaScript
            React</strong> d'OpenclassRooms.
          </p>

          <div className='about__info'>
            <div>
              <span className='about__info-title'>30+</span>
              <span className='about__info-name'>
                Outils
                <br /> utilisés
              </span>
            </div>
            <div>
              <span className='about__info-title'>35+</span>
              <span className='about__info-name'>
                Projet
                <br /> terminés
              </span>
            </div>
            <div>
              <span className='about__info-title'>13+</span>
              <span className='about__info-name'>
                Languages de programation utilisés
              </span>
            </div>
          </div>

          <div className='about__buttons'>
            <Button
              href='https://fabien-chareun.notion.site/fabien-chareun/Fabien-Chareun-Portfolio-b073981572194d799605f39d2544b400'
              target='_blank'
              title='Ouvrir mon CV'
              logo={<SiNotion />}
              className='about__btn'
            />

            <Button
              href='https://github.com/FabKaiz'
              target='_blank'
              title='Ouvrir mon GitHub'
              logo={<SiGithub />}
              className='about__btn'
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
