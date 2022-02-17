// Here all my recent projects and qualifications
import images from './images';

const projects = [
  {
    id: 1,
    title: 'Gerich restaurant responsive',
    description: `Reproduction d'une maquette Figma d'un restaurant 100% responsive, réalisé avec`,
    figmaLink: 'https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2',
    projectSite: 'https://gerich-restaurant.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/gerich-restaurant',
    img: images.Port14,
    codeLanguage: 'React'

  },
  {
    id: 2,
    title: 'Modern UI/UX GPT-3 Website',
    description: `Site static reprenant les design modernes des sites web GPT-3, réalisé avec`,
    figmaLink: 'https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1',
    projectSite: 'https://gpt3-modern-react.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/modern-gpt3-react',
    img: images.Port13,
    codeLanguage: 'React'
  },
  {
    id: 3,
    title: 'Bella - Creative Website',
    description: `Site inspiré par <a href="https://stockdutchdesign.com/"
      target="_blank">Stock Dutch Design</a>, un site qui a gagner un Awwwards.
      Réalisé a l'aide de`,
    projectSite: 'https://fabkaiz.github.io/gsap3-bella/',
    projectRepo: 'https://github.com/FabKaiz/gsap3-bella',
    img: images.Port10,
    codeLanguage: 'GSAP, ScrollTrigger, BarbaJs, Smooth Scrolling..'
  },
  {
    id: 4,
    title: 'Mon ancien portfolio',
    description: `Mon premier portfolio, réalisé avec`,
    projectSite: 'https://fabien-chareun.com/',
    projectRepo: 'https://github.com/FabKaiz/portfolio1',
    img: images.firstPortfolio,
    codeLanguage: 'HTML, CSS, JavaScript'
  },
  {
    id: 5,
    title: 'Responsive food delivery app',
    description: `Landing page of a food delivery app`,
    figmaLink: 'https://www.figma.com/file/KawxNnCZ1epHjQu0wSqlG2/Food-delivery-app-Ui-kit?node-id=0%3A1',
    projectSite: 'https://bella-olonje-delivery.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/food-delivery-app',
    img: images.foodDelivery,
    codeLanguage: 'React'
  },
  {
    id: 6,
    title: 'Travel Advisor',
    description: `Permet de trouver des hôtels et restaurants autour de vous ou sur la
      ville sélectionné. Ce que j'ai utilisé:`,
    projectSite: 'https://travel-advisor-fabkaiz.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/travel-advisor-react',
    img: images.Port12,
    codeLanguage: 'React, Google maps API, Travel Advisor et Weather API, MaterialUI'
  },
  {
    id: 7,
    title: 'UAE Realty',
    description: `Faux site immobilier avec de la vraie data, un système de recherche et des
      filtres fonctionnel, ce que j'ai utilisées :`,
    projectSite: 'https://nextjs-real-estate-nu.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/nextjs-real-estate',
    img: images.Port11,
    codeLanguage: 'NextJs, ChakraUi, millify, axios, NProgress, BayutAPI'
  },
  {
    id: 8,
    title: 'Pen reveal',
    description: `Animation d'un stylet qui se décompose au scroll (inspiré par
      <a href="https://destroytoday.com/blog/building-the-pencil-page" target="_blank">l'ancienne page de
        Fiftythree</a>). Fait a l'aide de`,
    projectSite: 'https://fabkaiz.github.io/gsap3-pen-reveal/',
    projectRepo: 'https://github.com/FabKaiz/gsap3-pen-reveal',
    img: images.Port9,
    codeLanguage: 'JavaScript, ScrollTrigger, GSAP'
  },
  {
    id: 13,
    title: 'Barba Galery',
    description: `Galerie de photos modernes réalisé avec`,
    projectSite: 'https://barbajs-gsap.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/barbajs-101',
    img: images.barbajsGsap,
    codeLanguage: 'BarbaJs, GSAP and JavaScript'
  },
  {
    id: 9,
    title: 'Furniture agency',
    description: `Landing page avec des transitions moderne, réalisé dans le cadre d'un exercise pour Petr Tichy, hôte des 'Website
    Reviews' par <strong>Awwwards</strong>. Fait a l'aide de`,
    projectSite: 'https://fabkaiz.github.io/gsap-slider-office/',
    projectRepo: 'https://github.com/FabKaiz/gsap3-slider-office',
    img: images.Port8,
    codeLanguage: 'JavaScript, GSAP'
  },
  {
    id: 10,
    title: 'Chin-up',
    description: `Mon <strong>projet en équipe</strong> pour <strong> Le Wagon Lyon:</strong>
      <i>Destiné aux introvertis / timides pour leur permettre de rencontrer de nouvelles
      personnes.</i> Réalisé avec`,
    projectSite: 'https://www.chin-up.xyz/',
    projectRepo: 'https://github.com/fannymugnier/chin-up',
    img: images.Port1,
    codeLanguage: 'Ruby, JavaScript',
    youtubeLink: 'https://www.youtube.com/watch?v=hJlf25bwRkI&list=PLwqwOtDwK_Zar-JrPOEAMDwYRiGay7Xw6&ab_channel=LeWagonLyon'
  },
  {
    id: 11,
    title: 'Jeu du Snake 🐍',
    description: `Le celebre <strong>jeu du Snake</strong> reproduit pendant un de mes
      cours de JavaScript, en utilisant <strong>uniquement</strong> du vanilla <strong>JavaScript.</strong>
      Cliquez sur le lien pour l'essayer :)`,
    projectSite: 'https://fabkaiz.github.io/snake-game-javascript/',
    projectRepo: 'https://github.com/FabKaiz/snake-game-javascript',
    img: images.Port4,
    codeLanguage: ''
  },
  {
    id: 12,
    title: 'Meme generator',
    description: `Générateur de meme aléatoire fait avec`,
    projectSite: 'https://fabkaiz.github.io/meme-generator-react/',
    projectRepo: 'https://github.com/FabKaiz/meme-generator-react',
    img: images.memeGenerator,
    codeLanguage: 'Meme API et React'
  },
  {
    id: 14,
    title: 'BarbaJs page transitions',
    description: `Plusieurs transitions de page réalisé a l'aide de`,
    projectSite: 'https://barbajs-css.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/barbajs-101',
    img: images.barbajsCss,
    codeLanguage: 'BarbaJs, Scss et JavaScript'
  },
  {
    id: 15,
    title: 'Suinnyside agency',
    description: `Frontend mentor challenges réalisé avec`,
    figmaLink: 'https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef',
    projectSite: 'https://sunnyside-vue.web.app/',
    projectRepo: 'https://github.com/FabKaiz/sunnyside-agency',
    img: images.Port7,
    codeLanguage: 'Vue, Scss'
  },
  {
    id: 16,
    title: 'Find your Coach',
    description: `Projet réalisé pendant un exercise de`,
    projectSite: 'https://find-coach-c96a2.web.app/coaches',
    projectRepo: 'https://github.com/FabKaiz/find-coach-vue',
    img: images.Port6,
    codeLanguage: 'VueJS'
  },
//   {
  //   id: 17,
  //   title: '',
  //   description: ``,
  //   projectSite: '',
  //   projectRepo: '',
  //   img: images.Port10,
  //   codeLanguage: ''
  // },
//   {
  //   id: 18,
  //   title: '',
  //   description: ``,
  //   projectSite: '',
  //   projectRepo: '',
  //   img: images.Port10,
  //   codeLanguage: ''
  // },
//   {
  //   id: 19,
  //   title: '',
  //   description: ``,
  //   projectSite: '',
  //   projectRepo: '',
  //   img: images.Port10,
  //   codeLanguage: ''
  // },
//   {
  //   id: 20,
  //   title: '',
  //   description: ``,
  //   projectSite: '',
  //   projectRepo: '',
  //   img: images.Port10,
  //   codeLanguage: ''
  // },
]

export default { projects };