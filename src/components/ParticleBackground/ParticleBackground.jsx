import React, { useState, useEffect } from 'react'

import Particles from "react-tsparticles";
import {particlesConfigDark, particlesConfigLight} from "./particles-config.js"

import './ParticleBackground.scss'

const ParticleBackground = () => {
  const [particleColor, setParticleColor] = useState(false);
  
  const dataTheme = document.querySelector('[data-theme]');

  const handleThemeChange = () => {
    const theme = document.querySelector('[data-theme]').dataset.theme;

    theme === 'dark' ? setParticleColor(true) : setParticleColor(false);
  }

  useEffect(() => {
    handleThemeChange()
  }, []);

  dataTheme.addEventListener('change', () => handleThemeChange())

  return (
    <Particles
      id="tsparticles-custom"
      options={particleColor ? particlesConfigDark : particlesConfigLight }
      style={{position: 'absolute', }}
    />
  )
}

export default ParticleBackground