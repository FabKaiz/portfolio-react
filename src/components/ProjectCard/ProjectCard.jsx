import React from 'react';

import { SiFigma, SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { images } from '../../constants';
import { Button } from '../../components'
import "./ProjectCard.scss";

const ProjectCard = () => {
  return (
    <div className="ProjectCard__container">
      <img src={images.Port14} alt="screenshot of the website" />

      <div className="ProjectCard__content">
        <h4>Gerich restaurant responsive</h4>
        <p>
          Reproduction d'une maquette Figma d'un restaurant 100% responsive,
          réalisé avec React.
        </p>

        <div className="project__buttons">
          <Button
            href="https://gerich-restaurant.netlify.app/"
            target="_blank"
            title="Site"
            logo={<CgWebsite />}
            rel="noreferrer"
            className="project__btn"
          />

          <Button
            href="https://github.com/FabKaiz/gerich-restaurant"
            target="_blank"
            rel="noreferrer"
            className="project__btn"
            title="Repo"
            logo={<SiGithub />}
          />

          <Button
            href="https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2"
            target="_blank"
            title="Figma"
            logo={<SiFigma />}
            rel="noreferrer"
            className="project__btn figma-button"
          />
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
