import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Elmar - web developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Web projects portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Elmar',
  subtitle: 'Peek into my web development learning',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Axion.png',
    title: 'Footwear',
    info: '',
    info2: '',
    url: 'https://visionary-stardust-eae08b.netlify.app',
    repo: 'https://github.com/elimareg/Footwear', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WeatherApp.png',
    title: 'Weather',
    info: '',
    info2: '',
    url: 'https://rad-bubblegum-35b619.netlify.app',
    repo: 'https://github.com/elimareg/weather', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'This portfolio',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/elimareg/pfolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'elimareg@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
