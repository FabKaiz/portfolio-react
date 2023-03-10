import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='dark__bg'>
      <div className='footer__container grid'>

        <div className='footer__name'>
          <p className='footer__title'>Fabien</p>
          <span className='footer__subtitle'>Développeur Front-end</span>
        </div>

        <ul className='footer__links'>
          <li>
            <a href='#skills'>Compétences</a>
          </li>
          <li>
            <a href='#recent-work'>Projet récent</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        <div className='footer__socials'>
          <a href='https://www.instagram.com/fab_citron' target='_blank' rel='noreferrer'>
            <BsInstagram />
          </a>
          <a href='https://twitter.com/ChareunFabien' target='_blank' rel='noreferrer'>
            <BsTwitter />
          </a>
          <a href='https://github.com/FabKaiz' target='_blank' rel='noreferrer'>
            <BsGithub />
          </a>
          <a href='https://www.linkedin.com/in/fabien-chareun/' target='_blank' rel='noreferrer'>
            <BsLinkedin />
          </a>
        </div>

      </div>
      <p className='footer__copyright'>&#169; Fabien Chareun - 2023</p>
    </footer>
  )
}

export default Footer