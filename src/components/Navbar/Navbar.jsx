import React from 'react'

import './Navbar.scss';

const Navbar = () => {
  return (
    <header class=" header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">
        <div class="nav__logo-container">
          {/* <img src="assets/img/FC-logo.png" alt="Mon logo FC"> */}
          Fabien
        </div>
      </a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">
              <i class="uil uil-estate nav__icon"></i>
              Accueil
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">
              <i class="uil uil-user nav__icon"></i>
              À propos
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link">
              <i class="uil uil-file-info-alt nav__icon"></i>
              Compétences
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">
              <i class="uil uil-briefcase nav__icon"></i>
              Services
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link">
              <i class="uil uil-scenery nav__icon"></i>
              Projet récent
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">
              <i class="uil uil-message nav__icon"></i>
              Me contacter
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav__close" id="nav-close"></i>
      </div>
      <div class="nav__btns">
        {/* <!-- Darkmode btn --> */}
        <i class="uil uil-moon change-theme" id="theme-button"></i>
        {/* <!-- Switch language btn --> */}
        <span class="switch__lang" id="switch-lang">
          EN
        </span>
        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 640 480">
          <g fill-rule="evenodd" stroke-width="1pt">
            <path fill="#fff" d="M0 0h640v480H0z"/>
            <path fill="#00267f" d="M0 0h213.337v480H0z"/>
            <path fill="#f31830" d="M426.662 0H640v480H426.662z"/>
          </g>
        </svg> --> */}
        <i class="uil change-theme" id="switch-lang"></i>
        <div class="nav__toggle" id="nav-toggle">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar