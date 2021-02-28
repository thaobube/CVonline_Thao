export const portfolioAll = [
  {
    img: 'project1.jpg',
    subtitle: 'ASP.NET Web App',
    title: 'Project 1',
    language: 'asp',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    videoURL: 'https://www.youtube.com/watch?v=KO77LfQ1DdM&ab_channel=Bubecraft',
    gitLink: 'https://github.com/thaobube/CVonline_Thao',
  },
  {
    img: 'project2.jpg',
    subtitle: 'PHP Web App',
    title: 'Project 2',
    language: 'php',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    videoURL: 'https://www.youtube.com/watch?v=KO77LfQ1DdM&ab_channel=Bubecraft',
    gitLink: 'https://github.com/thaobube/CVonline_Thao',
  },
  {
    img: 'project3.jpg',
    subtitle: 'Javascript Project',
    title: 'Project 3',
    language: 'js',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    videoURL: 'https://www.youtube.com/watch?v=KO77LfQ1DdM&ab_channel=Bubecraft',
    gitLink: 'https://github.com/thaobube/CVonline_Thao',
  },
  {
    img: 'project4.jpg',
    subtitle: 'Mobile Project',
    title: 'Project 4',
    language: 'mobile',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    videoURL: 'https://www.youtube.com/watch?v=KO77LfQ1DdM&ab_channel=Bubecraft',
    gitLink: 'https://github.com/thaobube/CVonline_Thao',
  },
  {
    img: 'project7.jpg',
    subtitle: 'React Project',
    title: 'Project 7',
    language: 'js',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    videoURL: 'https://www.youtube.com/watch?v=KO77LfQ1DdM&ab_channel=Bubecraft',
    gitLink: 'https://github.com/thaobube/CVonline_Thao',
  },
  {
    img: 'project8.jpg',
    subtitle: 'Toto',
    title: 'Project 8',
    language: 'other',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    videoURL: 'https://www.youtube.com/watch?v=KO77LfQ1DdM&ab_channel=Bubecraft',
    gitLink: 'https://github.com/thaobube/CVonline_Thao',
  },
  {
    img: 'project9.jpg',
    subtitle: 'React Project',
    title: 'Project 9',
    language: 'js',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    videoURL: 'https://www.youtube.com/watch?v=KO77LfQ1DdM&ab_channel=Bubecraft',
    gitLink: 'https://github.com/thaobube/CVonline_Thao',
  },
];

export const portfolioAsp = portfolioAll.filter((el) => el.language.includes('asp'));
export const portfolioJs = portfolioAll.filter((el) => el.language.includes('js'));
export const portfolioPhp = portfolioAll.filter((el) => el.language.includes('php'));
export const portfolioMobile = portfolioAll.filter((el) => el.language.includes('mobile'));
export const portfolioOther = portfolioAll.filter((el) => el.language.includes('other'));
