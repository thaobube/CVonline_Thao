export const portfolioAll = [
  {
    img: 'project1.jpg',
    subtitle: 'ASP.NET Web App',
    title: 'Project 1',
    language: 'asp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project2.jpg',
    subtitle: 'PHP Web App',
    title: 'Project 2',
    language: 'php',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project3.jpg',
    subtitle: 'Javascript Project',
    title: 'Project 3',
    language: 'js',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project4.jpg',
    subtitle: 'Mobile Project',
    title: 'Project 4',
    language: 'mobile',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project5.jpg',
    subtitle: 'Xamarin App',
    title: 'Project 5',
    language: 'mobile',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project6.jpg',
    subtitle: 'ASP.Net Web App',
    title: 'Project 6',
    language: 'asp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project7.jpg',
    subtitle: 'React Project',
    title: 'Project 7',
    language: 'js',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project8.jpg',
    subtitle: 'Toto',
    title: 'Project 8',
    language: 'other',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: 'project9.jpg',
    subtitle: 'React Project',
    title: 'Project 9',
    language: 'js',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const portfolioAsp = portfolioAll.filter((el) => el.language.includes('asp'));
export const portfolioJs = portfolioAll.filter((el) => el.language.includes('js'));
export const portfolioPhp = portfolioAll.filter((el) => el.language.includes('php'));
export const portfolioMobile = portfolioAll.filter((el) => el.language.includes('mobile'));
export const portfolioOther = portfolioAll.filter((el) => el.language.includes('other'));
