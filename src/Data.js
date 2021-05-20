import Bartender from './images/Bartender.png'
import FreeMarket from './images/FreeMarket.png'
import codeThink from './images/svg-1.svg'
import feedMe from './images/feedMe.svg'



export const colorPalette = {
  colorScheme2: [
    '#0b0c10',
    '#1f2833',
    '#c5c6c7',
    '#45a29e',
    '#66fcf1',
    '#f7f8fa',
    '#00dbcd'
  ],
  colorScheme: [
    '#010606',
    '#0b0c10',
    '#1c242f',
    '#c5c6c7',
    '#f7f8fa',
    '#66fcf1',
    '#00dbcd',
    '#45a29e',
  ],
}

export const projects = {
  p1: {
    title: `Bartender's Friend`,
    description: [
      'A web-based application that provides recipes and nutritional data on a variety of cocktails using Nutrionix and Cocktail DB APIs.'
    ],
    features: 'Search Functionality and Bar Chart Presentation',
    tools: ['JavaScript', 'CSS', 'HTML', 'Axios'],
    github: "https://github.com/Smeza314/Cocktail-Nutrition",
    deploy: "https://smeza314.github.io/Cocktail-Nutrition/",
    image: Bartender
  },
  p2: {
    title: 'Free Market',
    description: 'An application to connect outused goods with potential new owners. Users can search for items or post a listing of their own.',
    features: 'User Authentication, Live Search Bar, Product Posting, and Editable User Accounts',
    tools: ['JavaScript', 'CSS', 'HTML', 'Axios', 'MySQL', 'ExpressJS', 'NodeJS', 'Passport JWT'],
    github: "https://github.com/someseananigans/FreeMarket",
    deploy: "https://mighty-coast-38363.herokuapp.com/",
    image: FreeMarket
  },
  p3: {
    title: 'FeedMe',
    description: 'A MERN stack instagram clone with the emphasis on Food Feeds. Back-End algorithsms provide users with a variety of Feed options.',
    features: 'User Authentication, Image Uploading, Like/Comment/Follow Functionalities, Suggested Accounts, Diverse Feeds and Editable Profiles',
    tools: ['JavaScript', 'CSS', 'HTML', 'Axios', 'MongoDB', 'ExpressJS', 'NodeJS', 'ReactJS', 'Passport JWT'],
    github: "https://github.com/someseananigans/reinstagram",
    deploy: "https://mighty-mesa-72754.herokuapp.com/",
    image: feedMe
  },
  p4: {
    title: 'Whine and Dine',
    description: '',
    github: '',
    deploy: '',
    image: ''
  }
}


export const aboutMe = {
  id: 'about',
  // lightBg: true,
  // lightText: false,
  // lightTextDesc: false,
  topLine: 'About Me',
  headline: <>
    <p style={{ fontFamily: 'inherit' }}>Versatile</p>
    <p style={{ fontFamily: 'inherit' }}>Critical Thinker</p>
  </>,
  description: `I'm a team-oriented Full Stack Developer with a background in business development. Curious in nature, I am eager to test modern technologies and build solutions for complex problems. When I'm not fueling my passion for tech, you can find me exploring nature, playing volleyball, or trying unique foods.`,
  d1: `I'm a team-oriented Developer with a background in business development. `,
  d2: `Curious at heart, I'm always eager to test modern technologies and build solutions for complex problems. Currently exploring cloud technologies and honing my skills.`,
  d3: `When I'm not fueling my passion for tech, you can find me exploring nature, playing volleyball, or trying unique foods.`,
  // buttonLabel: 'Get Started',
  imgStart: true,
  img: codeThink,
  alt: 'shades',
  // dark: false,
  // primary: false,
  // darkText: true,
}

export const skills = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Skills',
  headline: <><p style={{ fontFamily: 'inherit' }}>Full-Stack</p> <p style={{ fontFamily: 'inherit' }}>Software Developement</p></>,
  description: `User Experience is key! From user stories and wireframes to design and functionality, I provide user friendly applications that solve customer software development needs. I'm most comfortable with MERN stack.`,
  // buttonLabel: 'Get Started',
  imgStart: true,
  img: codeThink,
  alt: '',
  dark: false,
  primary: false,
  darkText: true,
}