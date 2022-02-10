import React from 'react'

import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="header" id="header">
    <nav className="nav container">
      <a href="#home" className="nav__logo">
        <div className="nav__logo-container">
          {/* <img src="assets/img/FC-logo.png" alt="Mon logo FC"> */}
          Fabien
        </div>
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              <BiHomeAlt className='nav__icon' />
              Accueil
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <AiOutlineUser  className='nav__icon' />
              À propos
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="uil uil-file-info-alt nav__icon"></i>
              Compétences
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              <i className="uil uil-briefcase nav__icon"></i>
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              <i className="uil uil-scenery nav__icon"></i>
              Projet récent
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="uil uil-message nav__icon"></i>
              Me contacter
            </a>
          </li>
        </ul>
        <i className="uil uil-times nav__close" id="nav-close"></i>
      </div>
      <div className="nav__btns">
        {/* <!-- Darkmode btn --> */}
        <i className="uil uil-moon change-theme" id="theme-button"></i>
        {/* <!-- Switch language btn --> */}
        <span className="switch__lang" id="switch-lang">
          EN
        </span>
        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 640 480">
          <g fill-rule="evenodd" stroke-width="1pt">
            <path fill="#fff" d="M0 0h640v480H0z"/>
            <path fill="#00267f" d="M0 0h213.337v480H0z"/>
            <path fill="#f31830" d="M426.662 0H640v480H426.662z"/>
          </g>
        </svg> --> */}
        <i className="uil change-theme" id="switch-lang"></i>
        <div className="nav__toggle" id="nav-toggle">
          <i className="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar