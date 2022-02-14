import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './RecentWork.scss';

const RecentWork = () => {
  const [repos, setRepos] = useState([])
  console.log(repos);

  // useEffect(() => {
  //     axios({
  //       method: 'GET',
  //       url: 'https://api.github.com/users/fabkaiz/repos?sort=updated'
  //     }).then(res => {
  //       console.log(res)
  //       setRepos(res.data)
  //     })
  // }, []);

  const slicedRepos= repos.slice(0, 2);

  const renderRepo = (repo) => (
    <div className="repo__container" key={repo.id}>
      <h2 className="repo__title">
        {repo.name.toUpperCase()}
      </h2>
      <p>{repo.description}</p>

      <span>{repo.language}</span>

      <div className="repo__buttons">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Voir le repo
        </a>
        <a href={repo.homepage} target="_blank" rel="noreferrer">
          Voir le site
        </a>
      </div>
    </div>
  )
  
  return (
    <section className="recent section" id="recent-work">
      <h2 className="section__title">Projet récent</h2>
      <span className="section__subtitle">Mes réalisations récentes</span>

      {slicedRepos.map(renderRepo)}
      
    </section>
  )
}

export default RecentWork