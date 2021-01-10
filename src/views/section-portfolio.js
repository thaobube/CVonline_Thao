import { sectionTitle } from '../data/data-components';
import { portfolio } from '../data/data-portfolio';
import { createSectionTitle, createButton } from '../helpers/component-functions';

/* -----------Create the function renderExperiences------------ */
// to display all cards from the current first indext in the carousel
// (the CSS will display 1,2 or 3 depend on the screen size)
export const renderPortfolio = () => {
  let content = `
  ${createSectionTitle(sectionTitle.portfolio)}
  <div class="filters">
    ${createButton('all', 'filled', 'darkF')}
    ${createButton('C# (.NET)', 'filled', 'whiteF')}
    ${createButton('Javascript', 'filled', 'whiteF')}
    ${createButton('PHP', 'filled', 'whiteF')}
    ${createButton('mobile', 'filled', 'whiteF')}
    ${createButton('other', 'filled', 'whiteF')}
  </div>
  <div class="card-container">
  `;
  for (let i = 0; i < portfolio.length; i++) {
    content += `
        <div class="card">
          <div class="card__image">
            <img src="./images/${portfolio[i].img}" alt="logo">            
          </div>
          <div class="card__content">
            <div class="card__content__title">${portfolio[i].title}</div>
            <div class="card__content__description">${portfolio[i].description}</div> 
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
