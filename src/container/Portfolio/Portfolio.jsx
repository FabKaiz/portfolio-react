import React from 'react'

import { ProjectCard } from '../../components';
import { data } from '../../constants'
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="all-projects">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Liste de tout mes projets</span>

      <div className="portfolio__content">
        {data?.projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}

      </div>
    </section>
  )
}

export default Portfolio