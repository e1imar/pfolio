import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Elmar - web developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
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
    url: 'https://ftwear.netlify.app',
    repo: 'https://github.com/e1imar/Footwear', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reservation.png',
    title: 'Table reservation',
    info: '',
    info2: '',
    url: 'https://reservate.vercel.app/signin',
    repo: 'https://github.com/e1imar/reservations', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WeatherApp.png',
    title: 'Weather',
    info: '',
    info2: '',
    url: 'https://weatha.netlify.app',
    repo: 'https://github.com/e1imar/weather', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'I\'d love to hear from you!',
  btn: 'Send an email',
  email: 'e1imar@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/e1imar',
    },
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/e1imar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
