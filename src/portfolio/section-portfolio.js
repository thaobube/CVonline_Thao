import { sectionTitle } from '../components/section-title/data-section-title';
import { state } from '../base/state';
import { createSectionTitle } from '../components/section-title/section-title';
import { createButton } from '../components/button/button';

export const renderPortfolio = () => {
  let content = `
  ${createSectionTitle(sectionTitle.portfolio)}
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
  <div class="card-container">
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
  <div class="card-container">
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
  <div class="card-container">
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
  <div class="card-container">
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
  <div class="card-container">
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
  <div class="card-container">
    `;
      break;
    default:
      break;
  }

  for (let i = 0; i < state.currentArray.length; i++) {
    content += `
        <div class="card">
          <div class="card__image">
            <img src="./images/${state.currentArray[i].img}" alt="logo">
            <div class="card__image__subtitle">${state.currentArray[i].subtitle}</div>
            <div class="card__image__title">${state.currentArray[i].title}</div>        
          </div>
          <div class="card__overlay">
            <div class="card__content__title">${state.currentArray[i].title}</div>
            <div class="card__content__description">${state.currentArray[i].description}</div> 
            <div>${createButton('see more', 'filled', 'whiteF')}</div>
          </div>
        </div>
  `;
  }
  content += `
  </div> 
  `;
  return content;
};
