import React from 'react'

import { SiFigma, SiGithub } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { images } from '../../constants'
import './ProjectCard.scss'

const ProjectCard = () => {
  return (
    <div className="ProjectCard__container">
      <img src={images.Port14} alt="screenshot of the website" />

      <div className="ProjectCard__content">
        <h2>Gerich restaurant responsive - React</h2>
        <p>
          Reproduction d'une maquette Figma d'un restaurant 100% responsive,
          réalisé avec React.
        </p>

        <a href="https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2" target='_blank'>
          Voir le figma <SiFigma />
        </a>

        <a href="https://gerich-restaurant.netlify.app/" className="project__button-website">
          Voir le site <CgWebsite />
        </a>

        <a href="https://github.com/FabKaiz/gerich-restaurant" className="project__button-github">
          Voir le repo <SiGithub />
        </a>


      {/* title: 'Gerich restaurant responsive - React',
      description: `Reproduction d'une maquette Figma d'un restaurant 100% responsive, réalisé avec React.`,
      figmaLink: 'https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2',
      projectSite: 'https://gerich-restaurant.netlify.app/',
      projectRepo: 'https://github.com/FabKaiz/gerich-restaurant',
      img: images.Port14 */}
      </div>
    </div>
  )
}

export default ProjectCard