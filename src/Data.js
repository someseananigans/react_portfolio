import Bartender from './images/Bartender.png'
import FreeMarket from './images/FreeMarket.png'

export const colorPalette = {
  colorScheme: [
    '#0b0c10',
    '#1f2833',
    '#c5c6c7',
    '#45a29e',
    '#66fcf1',
    '#f7f8fa',
    '#00dbcd'
  ],
  colorScheme2: [
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
    image: ''
  },
  p4: {
    title: 'Whine and Dine',
    description: '',
    github: '',
    deploy: '',
    image: ''
  }
}
