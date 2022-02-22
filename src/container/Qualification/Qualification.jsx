import React from 'react'

import { data } from '../../constants'


import './Qualification.scss';


const Qualification = () => {
  
  return (
    <section className="qualification section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Mes compétences techniques et parcours professionnel</span>

      <div className="qualification__container">

        <div className="skills__content">
          {data?.skills?.map((skill) => (
            <div className="skill__item">
              <div className="skill__logo">
                <img src={skill.logo} alt="" />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="qualification__content">
          <div className="qualification__year">
            <h5>2022</h5>
            <h5>2021</h5>
          </div>
          <div className="qualification__name">
            <div>
              <h5>React</h5>
              <p>Bob Ziroll - Scrimba</p>
            </div>
            <div>
              <h5>Practical GreenSock</h5>
              <p>Petr Tichy - ihatetomatoes.net</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification