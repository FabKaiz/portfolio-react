import React from 'react'

import { data } from '../../constants'

import { QualificationItem } from '../../components'
import './Qualification.scss';


const Qualification = () => {
  
  return (
    <section className="qualification section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle qualification__description">Mes compétences techniques et parcours professionnel</span>

      <div className="qualification__container">

        <div className="skills__content">
          {data?.skills?.map((skill) => (
            <div className="skill__item" key={skill.name}>
              <div className="skill__logo">
                <img src={skill.logo} alt="skill logo" />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="qualification__content">
          {data?.qualification?.map((qualification) => (
            <QualificationItem
              year={qualification.year}
              title={qualification.title}
              description={qualification.description}
              key={qualification.title}
              className={qualification.className}
            />
          ))}
          
        </div>

      </div>
    </section>
  )
}

export default Qualification