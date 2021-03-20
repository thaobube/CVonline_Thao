import { sectionTitle } from '../components/section-title/data-section-title';
import { state } from '../base/state';
import { createSectionTitle } from '../components/section-title/section-title';
import { createButton } from '../components/button/button';

const partialContent = (n) => {
  let content = '';
  for (let i = 0; i < n; i++) {
    content += `
      <div class="card">
        <div class="card__image">
          <img src="./images/${state.currentArray[i].img}" alt="logo">          
        </div>
        <div class="card__overlay">
          <div class="card__overlay-info">
            <div class="card__overlay-subtitle">${state.currentArray[i].subtitle}</div>
            <div class="card__overlay-title">${state.currentArray[i].title}</div>
            <div class="card__overlay-intro">${state.currentArray[i].intro}</div> 
            <p class="seeMore">See More <i class="fas fa-long-arrow-alt-right"></i></p>
          </div>
        </div>
        <div class="card__modal--hidden">
          <div class="closeModal"><i class="far fa-times-circle"></i></div>
          <div class="modal-info">
            <div class="modal-subtitle">${state.currentArray[i].subtitle}</div>
            <div class="modal-title">${state.currentArray[i].title}</div>
            <div class="modal-intro">${state.currentArray[i].intro}</div>
            <div class="modal-description">${state.currentArray[i].description}</div>
            `;
    if (state.currentArray[i].appLink !== '#') {
      content += `
              <a href="${state.currentArray[i].appLink}" target="_blank" class="btn btn-filled btn-modalF"><span>View Live Version</span></a>
              <a href="${state.currentArray[i].gitLink}" target="_blank" class="btn btn-filled btn-modalUF"><span>View Github</span></a>
              <br />
              `;
    } else {
      content += `
              <a href="${state.currentArray[i].gitLink}" target="_blank" class="btn btn-filled btn-modalUF"><span>View Github</span></a>
              <br />
              `;
    }
    if (state.currentArray[i].video !== '#') {
      content += ` 
          <div class="modal-video">
            <video controls muted>
              <source src="./videos/${state.currentArray[i].video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>   
`;
    }
    content += `
        </div>
      </div>
    </div> 
`;
  }
  return content;
};

export const renderPortfolio = () => {
  let content = `
  ${createSectionTitle(sectionTitle.portfolio)}
  <div class="intro-portfolio">
  Over the past year or so, I have taken my first steps towards becoming a web app developer. From simple first exercises with HTML and CSS, to small projects with Javascript and React, from the basic concepts of object-oriented programming with C # and PHP to projects with ASP.NET MVC and Symfony framework. I really want to save those first steps as a diary of my journey through projects that I have worked on. The current list of projects is still incomplete. I will continuously update the projects in the near future. 
  </div>
  <div class="filters">`;
  switch (state.currentPortfolioButton) {
    case 'all':
      content += `
    ${createButton('all', 'filled', 'darkF', 'btn-all')}
    ${createButton('C# (.NET)', 'filled', 'whiteF', 'btn-asp')}
    ${createButton('Javascript', 'filled', 'whiteF', 'btn-js')}
    ${createButton('PHP', 'filled', 'whiteF', 'btn-php')}
    ${createButton('mobile', 'filled', 'whiteF', 'btn-mobile')}
    ${createButton('other', 'filled', 'whiteF', 'btn-other')}
  </div>
    `;
      break;
    case 'asp':
      content += `
    ${createButton('all', 'filled', 'whiteF', 'btn-all')}
    ${createButton('C# (.NET)', 'filled', 'darkF', 'btn-asp')}
    ${createButton('Javascript', 'filled', 'whiteF', 'btn-js')}
    ${createButton('PHP', 'filled', 'whiteF', 'btn-php')}
    ${createButton('mobile', 'filled', 'whiteF', 'btn-mobile')}
    ${createButton('other', 'filled', 'whiteF', 'btn-other')}
  </div>
    `;
      break;
    case 'js':
      content += `
    ${createButton('all', 'filled', 'whiteF', 'btn-all')}
    ${createButton('C# (.NET)', 'filled', 'whiteF', 'btn-asp')}
    ${createButton('Javascript', 'filled', 'darkF', 'btn-js')}
    ${createButton('PHP', 'filled', 'whiteF', 'btn-php')}
    ${createButton('mobile', 'filled', 'whiteF', 'btn-mobile')}
    ${createButton('other', 'filled', 'whiteF', 'btn-other')}
  </div>
    `;
      break;
    case 'php':
      content += `
    ${createButton('all', 'filled', 'whiteF', 'btn-all')}
    ${createButton('C# (.NET)', 'filled', 'whiteF', 'btn-asp')}
    ${createButton('Javascript', 'filled', 'whiteF', 'btn-js')}
    ${createButton('PHP', 'filled', 'darkF', 'btn-php')}
    ${createButton('mobile', 'filled', 'whiteF', 'btn-mobile')}
    ${createButton('other', 'filled', 'whiteF', 'btn-other')}
  </div>
    `;
      break;
    case 'mobile':
      content += `
    ${createButton('all', 'filled', 'whiteF', 'btn-all')}
    ${createButton('C# (.NET)', 'filled', 'whiteF', 'btn-asp')}
    ${createButton('Javascript', 'filled', 'whiteF', 'btn-js')}
    ${createButton('PHP', 'filled', 'whiteF', 'btn-php')}
    ${createButton('mobile', 'filled', 'darkF', 'btn-mobile')}
    ${createButton('other', 'filled', 'whiteF', 'btn-other')}
  </div>
    `;
      break;
    case 'other':
      content += `
    ${createButton('all', 'filled', 'whiteF', 'btn-all')}
    ${createButton('C# (.NET)', 'filled', 'whiteF', 'btn-asp')}
    ${createButton('Javascript', 'filled', 'whiteF', 'btn-js')}
    ${createButton('PHP', 'filled', 'whiteF', 'btn-php')}
    ${createButton('mobile', 'filled', 'whiteF', 'btn-mobile')}
    ${createButton('other', 'filled', 'darkF', 'btn-other')}
  </div>
    `;
      break;
    default:
      break;
  }
  if (state.currentArray.length > 6) {
    content += `
  <div class="partialDisplay">  
    <div class="card-container">
  `;
    content += `${partialContent(6)}`;
    content += `
  </div>
  <p class="see-more">See More Projects <i class="fas fa-long-arrow-alt-right"></i></p>
  </div>
  `;
    content += `
  <div class="fullDisplay">
    <div class="card-container">
  `;
    content += `${partialContent(state.currentArray.length)}`;
    content += `
  </div>
  <p class="see-less"><i class="fas fa-long-arrow-alt-left"></i> See Less Projects</p>
  </div>
  `;
  } else {
    content += `
    <div class="fullDisplay">
      <div class="card-container">
    `;
    content += `${partialContent(state.currentArray.length)}`;
  }
  content += `
  </div> 
  `;
  return content;
};
