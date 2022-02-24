import React from 'react'

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container footer__bg grid">

        <div className="footer__name">
          <h1 className="footer__title">Fabien</h1>
          <span className="footer__subtitle">Développeur Front-end</span>
        </div>

        <ul className="footer__links">
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#recent-work">Projet récent</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.instagram.com/fab_citron" target="_blank" class="footer__social">
            <i class="uil uil-instagram-alt"></i>
          </a>
          <a href="https://twitter.com/ChareunFabien" target="_blank" class="footer__social">
            <i class="uil uil-twitter"></i>
          </a>
          <a href="https://github.com/FabKaiz" target="_blank" class="footer__social">
            <i class="uil uil-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/fabien-chareun/" target="_blank" class="footer__social">
            <i class="uil uil-linkedin"></i>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer