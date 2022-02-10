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
import "./Navbar.scss";

const Navbar = () => {
 
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <div className="nav__logo-container">
            <img src={images.FCLogo} alt="Mon logo fc" />
            Fabien
          </div>
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <BiHomeAlt className="nav__icon" />
                Accueil
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser className="nav__icon" />À propos
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <AiOutlineFileDone className="nav__icon" />
                Compétences
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
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
              <a href="#contact" className="nav__link">
                <BiMailSend className="nav__icon" />
                Me contacter
              </a>
            </li>
          </ul>

          <AiOutlineClose className="nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
          {/* <!-- Darkmode btn --> */}
          {/* <FiSun className="change-theme" id="theme-button" />
          <FiMoon className="change-theme" id="theme-button" /> */}

          
          <div className="nav__toggle" id="nav-toggle">
            <AiOutlineMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
