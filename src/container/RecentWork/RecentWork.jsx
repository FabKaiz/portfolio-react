import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './RecentWork.scss';
import { RepoCard } from '../../components';

const RecentWork = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
      axios({
        method: 'GET',
        url: 'https://api.github.com/users/fabkaiz/repos?sort=updated'
      }).then(res => {
        setRepos(res.data)
      })
  }, []);

  const slicedRepos= repos.slice(0, 2);

  const renderRepo = (repo) => (
    <div className="repo__content" key={repo.id}>
      <RepoCard repo={repo}/>
    </div>
  )
  
  return (
    <section className="recent section" id="recent-work">
      <h2 className="section__title">Projet récent</h2>
      <span className="section__subtitle">Mes 2 dernières contributions sur GitHub</span>

      <div className="recent__work-container">
        {slicedRepos.map(renderRepo)}
      </div>
    </section>
  )
}

export default RecentWork