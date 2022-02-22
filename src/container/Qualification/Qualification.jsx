import React from 'react'

import { data } from '../../constants'


import './Qualification.scss';


const Qualification = () => {
  
  return (
    <section className="qualification section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Mes compétences techniques et parcours</span>

      <div className="skills__container">
        {data?.skills?.map((skill) => (
          <div className="skill__item">
            <div className="skill-logo">{skill.logo}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="qualification__container">

      </div>
    </section>
  )
}

export default Qualification