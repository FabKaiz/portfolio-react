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
          <div className="qualification__item">
            <div className="qualification__year">
              <h4>2022</h4>
            </div>
            <div className="qualification__name">
              <h4>React</h4>
              <p>Bob Ziroll - Scrimba</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification