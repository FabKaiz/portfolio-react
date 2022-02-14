import React from 'react'

import { SiNotion, SiGithub } from 'react-icons/si'
import { Button } from '../../components';
import { images } from '../../constants';
import './About.scss';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">À propos</h2>
      <span className="section__subtitle">Présentation</span>
      <div className="about__container">
        <img src={images.meAbout} alt="" className="about__img" />

        <div className="about__content">

          <p>
            Après avoir travaillé 7 ans dans une carrosserie automobile,
            j'ai décidé de changer de vie pour faire ce que j'aime vraiment
            et devenir <strong>développeur web.</strong> Apres
            <strong> 9 semaines</strong> à <strong>Le Wagon Lyon</strong> dont
            <strong> 2 semaines de projet en équipe</strong> j'ai obtenu ma
            certification de <strong>concepteur-développeur d’applications web</strong>.
            Maintenant je souhaite me spécialiser dans le <strong>Front-end</strong>.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">Outils<br /> utilisés</span>
            </div>
            <div>
              <span className="about__info-title">25+</span>
              <span className="about__info-name">Projet<br /> terminés</span>
            </div>
            <div>
              <span className="about__info-title">12+</span>
              <span className="about__info-name">Languages de programation utilisés</span>
            </div>
          </div>

          <div className="about__buttons">
            <Button
              href="https://flash-handball-7c5.notion.site/Fabien-Chareun-0534008f12c14f299289e8285c7de2ff"
              target="_blank"
              title="Ouvrir mon CV"
              logo={<SiNotion />}
              className="about__btn"
            />

            <Button
              href="https://github.com/FabKaiz"
              target="_blank"
              title="Ouvrir mon GitHub"
              logo={<SiGithub />}
              className="about__btn"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About