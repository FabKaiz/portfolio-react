import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ProjectCard } from '../../components';
import { data } from '../../constants'
import './Portfolio.scss';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 2001 },
    items: 7,
    slidesToSlide: 4,

  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5,
    slidesToSlide: 3,

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Portfolio = () => {
  return (
    <section className="portfolio section" id="all-projects">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Liste de tout mes projets</span>

      {/* <div className="portfolio__content">
        {data?.projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}


      </div> */}

        <div className="carousel__container">
          <Carousel
            autoPlaySpeed={999999}
            responsive={responsive}
            showDots={true}
            renderDotsOutside
          >
            {data?.projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </Carousel>
        </div>

    </section>
  )
}

export default Portfolio