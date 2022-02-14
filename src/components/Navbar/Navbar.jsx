import React, { useState } from "react";

import { BiHomeAlt, BiBriefcaseAlt2, BiMailSend } from "react-icons/bi";
import {
  AiOutlineUser,
  AiOutlineFileDone,
  AiOutlinePicture,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import { images } from "../../constants";
import { DarkMode } from "../../components";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // When we click on each nav__link, we remove the show-menu class
  const closeMenu = () => setToggleMenu(false)
  const navLink = document.querySelectorAll('.nav__link')
  navLink.forEach(n => n.addEventListener('click', closeMenu))
 
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <div className="nav__logo-container">
            <img src={images.FCLogo} alt="Mon logo fc" />
            Fabien
          </div>
        </a>
        <div className={`nav__menu ${toggleMenu ? 'show-menu' : 'hide-menu'}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <BiHomeAlt className="nav__icon" />
                Accueil
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser className="nav__icon" />
                À propos
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <AiOutlinePicture className="nav__icon" />
                Projet récent
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <BiBriefcaseAlt2 className="nav__icon" />
                Tout mes projets
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <AiOutlineFileDone className="nav__icon" />
                Compétences
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <BiMailSend className="nav__icon" />
                Contact
              </a>
            </li>

          </ul>
        </div>

        <div className="nav__btns">
          <DarkMode />
          <div className="nav__toggle" id="nav-toggle">
            {toggleMenu
              ? <AiOutlineClose className="nav__close" onClick={() => setToggleMenu(false)} />
              : <AiOutlineMenu onClick={() => setToggleMenu(true)} />
            }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
