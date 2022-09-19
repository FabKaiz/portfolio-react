// Here all my recent projects and qualifications
import images from './images'

const projects = [
  {
    id: 29,
    title: 'Mounting Unmounting animation',
    description: `Des animations au montage et demontage des components, reproduit avec `,
    projectSite: 'https://react-spring-mounting-unmounting.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/react-mount-unmount-animations',
    img: images.reactSpring1,
    codeLanguage: 'React et React Spring',
  },
  {
    id: 29,
    title: 'Crappo Crypto',
    description: `Maquette dribbble d'une app de minage de cryptomonnaie, 100% responsive, reproduit avec `,
    figmaLink:
      'https://dribbble.com/shots/15067925--Freebie-CRAPPO-Cryptocurrency-Website',
    projectSite: 'https://crappo-crypto-ts.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/crappo-crypto-ts',
    img: images.crappoCrypto,
    codeLanguage: 'NextJs, Typescript, Scss et React Icons',
  },
  {
    id: 28,
    title: 'Data processing app',
    description: `Maquette dribbble d'une app de traitement des données, reproduit avec `,
    figmaLink:
      'https://dribbble.com/shots/15102679-Dark-Landing-Page-Concept-For-Data-Processing-Company',
    projectSite: 'https://data-landing-nextjs.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/data-landing-nextjs',
    img: images.dataProcessing,
    codeLanguage: 'NextJs, Scss',
  },
  {
    id: 27,
    title: 'Woodies',
    description: `Maquette dribbble de magasin de meubles en ligne, reproduit avec `,
    figmaLink:
      'https://dribbble.com/shots/11018704/attachments/2612947?mode=media',
    projectSite: 'https://woodies-nextjs.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/woodies-nextjs',
    img: images.woodies,
    codeLanguage: 'NextJs, Scss',
  },
  {
    id: 26,
    title: '"Fakestagram" - Insta Clone',
    description: `Reproduction du celebre site Instagram fait avec `,
    projectSite: 'https://instagram-clone-nextjs-gamma.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/instagram-clone-nextjs',
    img: images.instaClone,
    codeLanguage: 'NextJs, Next Auth, Recoil, Tailwind, Firebase et OAuth',
  },
  {
    id: 25,
    title: 'Medium Clone',
    description: `Reproduction du celebre site Medium fait avec `,
    projectSite: 'https://nextjs-sanity-medium.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/nextjs-sanity-medium',
    img: images.mediumClone,
    codeLanguage: 'NextJs, Tailwind, TypeScript et Sanity',
  },
  {
    id: 24,
    title: 'Admin Panel',
    description: `Panneau d'administration avec plusieurs theme réalisé avec`,
    projectSite: 'https://fabkaiz-admin-panel.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/admin-panel',
    img: images.admin,
    codeLanguage:
      'React, Material Ui Icons - Table - Data-grid, Recharts, Scss, React Router V6, React Circular Progressbar',
  },
  {
    id: 23,
    title: 'Site E-commerce',
    description: `Faux site de e-commerce fait avec`,
    projectSite: 'https://sanity-stripe-shop.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/sanity-stripe-shop',
    img: images.sanityStripe,
    codeLanguage:
      'NextJs en frontend, Sanity pour le backend, Stripe, canvas-confetti',
  },
  {
    id: 22,
    title: 'Travel Blog',
    description: `Blog de voyage fait de A a Z avec`,
    projectSite: 'https://travel-blog-snowy.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/travel-blog',
    img: images.travelBlog,
    codeLanguage:
      'NextJs en frontend, Sanity pour le backend, mapboxGL, Groq, NProgress',
  },
  {
    id: 21,
    title: 'Space Tourism',
    description: `Challenge <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3" target="_blank">Frontend Mentor</a> 100% responsive réalisé a l'aide de`,
    projectSite: 'https://space-tourism-react-fabkaiz.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/react-space-tourism',
    img: images.spaceTourism,
    codeLanguage:
      'React, React Router v6, framer-motion, React Transition Group, sass',
  },
  {
    id: 20,
    title: 'Mini jeux JavaScript',
    description: `Mini jeux comme Wordle, 2048, Puissance 4, pierre feuille ciseaux, etc... Avec le minimun de style fait avec du`,
    projectSite: 'https://javascript-minigames.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/javascript-games',
    img: images.JavaScriptGame,
    codeLanguage: 'vanilla JavaScript',
  },
  {
    id: 1,
    title: 'Gerich restaurant responsive',
    description: `Reproduction d'une maquette Figma d'un restaurant 100% responsive, réalisé avec`,
    figmaLink:
      'https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2',
    projectSite: 'https://gerich-restaurant.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/gerich-restaurant',
    img: images.Port14,
    codeLanguage: 'React',
  },
  {
    id: 2,
    title: 'Modern UI/UX GPT-3 Website',
    description: `Site static reprenant les design modernes des sites web GPT-3, réalisé avec`,
    figmaLink:
      'https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1',
    projectSite: 'https://gpt3-modern-react.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/modern-gpt3-react',
    img: images.Port13,
    codeLanguage: 'React',
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
    codeLanguage: 'GSAP, ScrollTrigger, BarbaJs, Smooth Scrolling..',
  },
  {
    id: 4,
    title: 'Mon ancien portfolio',
    description: `Mon premier portfolio, réalisé avec`,
    projectSite: 'https://fabienchareun.com/',
    projectRepo: 'https://github.com/FabKaiz/portfolio1',
    img: images.firstPortfolio,
    codeLanguage: 'HTML, CSS, JavaScript',
  },
  {
    id: 19,
    title: 'Analytics app',
    description: `Landing page d'une application d'analytique 100% responsive codé avec`,
    projectSite: 'https://analytics-landing-react.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/analytics-landing-react',
    figmaLink:
      'https://www.figma.com/file/K8RIvVtJKHdXIqjpAPe97y/Analytics-%E2%80%94-Landing-Page-Design',
    img: images.analytics,
    codeLanguage: 'React et Scss',
  },
  {
    id: 5,
    title: 'Responsive food delivery app',
    description: `Landing page of a food delivery app`,
    figmaLink:
      'https://www.figma.com/file/KawxNnCZ1epHjQu0wSqlG2/Food-delivery-app-Ui-kit?node-id=0%3A1',
    projectSite: 'https://bella-olonje-delivery.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/food-delivery-app',
    img: images.foodDelivery,
    codeLanguage: 'React',
  },
  {
    id: 6,
    title: 'Travel Advisor',
    description: `Permet de trouver des hôtels et restaurants autour de vous ou sur la
      ville sélectionné. Ce que j'ai utilisé:`,
    projectSite: 'https://travel-advisor-fabkaiz.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/travel-advisor-react',
    img: images.Port12,
    codeLanguage:
      'React, Google maps API, Travel Advisor et Weather API, MaterialUI',
  },
  {
    id: 7,
    title: 'UAE Realty',
    description: `Faux site immobilier avec de la vraie data, un système de recherche et des
      filtres fonctionnel, ce que j'ai utilisées :`,
    projectSite: 'https://nextjs-real-estate-nu.vercel.app/',
    projectRepo: 'https://github.com/FabKaiz/nextjs-real-estate',
    img: images.Port11,
    codeLanguage: 'NextJs, ChakraUi, millify, axios, NProgress, BayutAPI',
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
    codeLanguage: 'JavaScript, ScrollTrigger, GSAP',
  },
  {
    id: 13,
    title: 'Barba Galery',
    description: `Galerie de photos modernes réalisé avec`,
    projectSite: 'https://barbajs-gsap.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/barbajs-101',
    img: images.barbajsGsap,
    codeLanguage: 'BarbaJs, GSAP and JavaScript',
  },
  {
    id: 9,
    title: 'Furniture agency',
    description: `Landing page avec des transitions moderne, réalisé dans le cadre d'un exercise pour Petr Tichy, hôte des 'Website
    Reviews' par <strong>Awwwards</strong>. Fait a l'aide de`,
    projectSite: 'https://fabkaiz.github.io/gsap-slider-office/',
    projectRepo: 'https://github.com/FabKaiz/gsap3-slider-office',
    img: images.Port8,
    codeLanguage: 'JavaScript, GSAP',
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
    codeLanguage: 'Ruby on Rails, JavaScript et Scss',
    youtubeLink:
      'https://www.youtube.com/watch?v=hJlf25bwRkI&list=PLwqwOtDwK_Zar-JrPOEAMDwYRiGay7Xw6&ab_channel=LeWagonLyon',
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
    codeLanguage: '',
  },
  {
    id: 12,
    title: 'Meme generator',
    description: `Générateur de meme aléatoire fait avec`,
    projectSite: 'https://fabkaiz.github.io/meme-generator-react/',
    projectRepo: 'https://github.com/FabKaiz/meme-generator-react',
    img: images.memeGenerator,
    codeLanguage: 'Meme API et React',
  },
  {
    id: 14,
    title: 'BarbaJs page transitions',
    description: `Plusieurs transitions de page réalisé a l'aide de`,
    projectSite: 'https://barbajs-css.netlify.app/',
    projectRepo: 'https://github.com/FabKaiz/barbajs-101',
    img: images.barbajsCss,
    codeLanguage: 'BarbaJs, Scss et JavaScript',
  },
  {
    id: 15,
    title: 'Suinnyside agency',
    description: `Frontend mentor challenges réalisé avec`,
    figmaLink:
      'https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef',
    projectSite: 'https://sunnyside-vue.web.app/',
    projectRepo: 'https://github.com/FabKaiz/sunnyside-agency',
    img: images.Port7,
    codeLanguage: 'Vue, Scss',
  },
  {
    id: 16,
    title: 'Find your Coach',
    description: `Projet réalisé pendant un exercise de`,
    projectSite: 'https://find-coach-c96a2.web.app/coaches',
    projectRepo: 'https://github.com/FabKaiz/find-coach-vue',
    img: images.Port6,
    codeLanguage: 'VueJS',
  },
  {
    id: 17,
    title: 'JavaScript components',
    description: `Page avec plusieurs components realisés en vanilla`,
    projectSite: 'https://fabkaiz.github.io/Javascript-component/',
    projectRepo: 'https://github.com/FabKaiz/Javascript-component',
    img: images.Port3,
    codeLanguage: 'JavaScript',
  },
  {
    id: 18,
    title: 'Grab a star',
    description: `Clone d'Airbnb où vous pouvez louer une "star du dev" ou de cinéma, fait en équipe
      pour <strong> Le Wagon Lyon</strong>. Codé en`,
    projectSite: 'https://grab-a-star.herokuapp.com/',
    img: images.Port2,
    codeLanguage: 'Ruby on Rails',
  },
]

const skills = [
  // FRONTEND
  {
    id: 1,
    name: 'HTML',
    logo: images.html,
  },
  {
    id: 2,
    name: 'CSS / SCSS',
    logo: images.sass,
  },
  {
    id: 3,
    name: 'JavaScript',
    logo: images.javascript,
  },
  {
    id: 4,
    name: 'VueJs',
    logo: images.vue,
  },
  {
    id: 5,
    name: 'ReactJs',
    logo: images.react,
  },
  {
    id: 5,
    name: 'NextJs',
    logo: images.nextjsIcon,
  },
  // BACKEND
  {
    id: 6,
    name: 'Ruby',
    logo: images.ruby,
  },
  {
    id: 7,
    name: 'RoR',
    logo: images.rails,
  },
  {
    id: 8,
    name: 'DB / SQL',
    logo: images.db,
  },
  // TOOLS
  {
    id: 9,
    name: 'Figma',
    logo: images.figma,
  },
  {
    id: 10,
    name: 'Heroku',
    logo: images.heroku,
  },
  {
    id: 11,
    name: 'Git / GitHub',
    logo: images.github,
  },
  {
    id: 12,
    name: 'Hotjar',
    logo: images.hotjar,
  },
  {
    id: 13,
    name: 'Firebase',
    logo: images.firebase,
  },
  {
    id: 14,
    name: 'Netlify',
    logo: images.netlify,
  },
  {
    id: 15,
    name: 'Jest',
    logo: images.jest,
  },
]

const qualification = [
  {
    year: 2022,
    title: 'TypeScript',
    description: 'Jack Herrington',
  },
  {
    year: 2022,
    title: 'React intermédiaire',
    description: 'OpenClassrooms',
    className: 'opacity-0',
  },
  {
    year: 2022,
    title: 'React basics',
    description: 'Bob Ziroll - Scrimba',
    className: 'opacity-0',
  },
  {
    year: 2022,
    title: 'Practical GreenSock',
    description: 'Petr Tichy - ihatetomatoes.net',
    className: 'opacity-0',
  },
  {
    year: 2021,
    title: 'VueJs 2 & 3',
    description: 'Maximilian Schwarzmüller & Enzo Ustariz - Udemy',
  },
  {
    year: 2021,
    title: 'Bien comprendre JavaScript ES6 / ES7',
    description: 'John Taieb - Udemy',
    className: 'opacity-0',
  },
  {
    year: 2021,
    title: 'JavaScript basics',
    description: 'Chris Sev - Better Dev',
    className: 'opacity-0',
  },
  {
    year: 2021,
    title: 'Certification concepteur-développeur d’applications web',
    description: 'Le Wagon - Lyon',
    className: 'opacity-0',
  },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default { projects, skills, qualification }
