import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './RecentWork.scss';
import { RepoCard } from '../../components';

const RecentWork = () => {
  const [repos, setRepos] = useState([])

  // useEffect(() => {
  //     axios({
  //       method: 'GET',
  //       url: 'https://api.github.com/users/fabkaiz/repos?sort=updated'
  //     }).then(res => {
  //       setRepos(res.data)
  //     })
  // }, []);

  const slicedRepos= repos.slice(0, 2);

  const renderRepo = (repo) => (
    <div className="repo__content" key={repo.id}>
      <RepoCard repo={repo}/>
    </div>
  )
  
  return (
    <section className="recent section" id="recent-work">
      <h2 className="section__title">Projet récent</h2>
      <span className="section__subtitle">Mes 2 dernieres réalisations</span>

      <div className="recent__work-container">
        {slicedRepos.map(renderRepo)}
      </div>

      {/* SOLID DATA FOR DEV ONLY */}
      <div className="recent__work-container">
        <div className="repo__content">
          <div className="repo__container">
            <h2 className="repo__title">
              Responsive restaurant
            </h2>
            <p>Modern UI/UX Restaurant Landing Page Website</p>
            <div className="repo__buttons">
              <a href='https://github.com/FabKaiz/gerich-restaurant' target="_blank" rel="noreferrer">
                Voir le repo
              </a>
              <a href='https://github.com/FabKaiz/gerich-restaurant' target="_blank" rel="noreferrer">
                Voir le site
              </a>
            </div>
            <div className="line"></div>
            <span className={`repo__language-tag Vue`} >Vue</span>
          </div>
        </div>

        <div className="repo__content">
          <div className="repo__container">
            <h2 className="repo__title">
              Responsive restaurant
            </h2>
            <p>Modern UI/UX Restaurant Landing Page Website</p>
            <div className="repo__buttons">
              <a href='https://github.com/FabKaiz/gerich-restaurant' target="_blank" rel="noreferrer">
                Voir le repo
              </a>
              <a href='https://github.com/FabKaiz/gerich-restaurant' target="_blank" rel="noreferrer">
                Voir le site
              </a>
            </div>
            <div className="line"></div>
            <span className={`repo__language-tag Ruby`} >Ruby</span>
          </div>
        </div>

      </div>


    </section>
  )
}

export default RecentWork