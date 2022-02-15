import React from 'react'

import './RepoCard.scss'

const RepoCard = () => {
  return (
    <div className="repo__container" key={7}>
      <h2 className="repo__title">
        THE-NAME-OF-REPOSITORY
      </h2>
      <p>This is a simple description of the repository on github</p>

      <div className="repo__buttons">
        <a href='https://github.com/FabKaiz/gerich-restaurant' target="_blank" rel="noreferrer">
          Voir le repo
        </a>
        <a href='https://gerich-restaurant.netlify.app/' target="_blank" rel="noreferrer">
          Voir le site
        </a>
      </div>

      <div className="line"></div>
  
      <span>JavaScript</span>
    </div>
  )
}

export default RepoCard