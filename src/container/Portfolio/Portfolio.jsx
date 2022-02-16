import React from 'react'

import { data } from '../../constants'
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="all-projects">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle">Liste de tout mes projets</span>

      <div className="portfolio__content">
        {data?.projects.map((project) => (
          project.title
        ))}
      </div>
    </section>
  )
}

export default Portfolio