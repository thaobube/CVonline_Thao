import { sectionTitle } from '../components/section-title/data-section-title';
import { experiences } from './data-experiences';
import { createSectionTitle } from '../components/section-title/section-title';
import { state } from '../base/state';

/* -----------Create the function renderExperiences------------ */
// to display all cards from the current first indext in the carousel
// (the CSS will display 1,2 or 3 depend on the screen size)
export const renderExperiences = () => {
  let content = `
  ${createSectionTitle(sectionTitle.experiences)}
  <div class="carousel">
    <div class="carousel__content">
      <div class="arrow arrow--previous">
        <i class="fas fa-angle-left"></i>
      </div><!--close arrow left-->    
      <div class="slide-container">
  `;
  for (let i = state.currentFirstIndex; i < experiences.length; i++) {
    content += `
        <div class="slide">
          <div class="slide__logo">
          <img src="./images/${experiences[i].logo}" alt="logo">            
          </div>
          <div class="slide__heading">${experiences[i].company}</div>
          <div class="slide__title">${experiences[i].role}</div>
          <div class="slide__description">${experiences[i].description}</div>
          <div class="slide__link"><a href="${experiences[i].link}">Learn more about ${experiences[i].acronym} <i class="fas fa-external-link-alt"></i></a></div> 
          <hr>       
          <div class="slide__duration">${experiences[i].duration}</div>
        </div>
  `;
  }
  content += `
  <div class="slide slide--empty">
  </div>
  <div class="slide slide--empty">
  </div>
  `;
  content += `  
      </div><!--close slide-container-->
      <div class="arrow arrow--next">
        <i class="fas fa-angle-right"></i>
      </div><!--close arrow right-->  
    </div><!--close carousel__content-->  
    <div class="carousel__dots">
    `;
  for (let j = 0; j < experiences.length; j++) {
    if (j === state.currentFirstIndex) {
      content += `
      <i class="fas fa-circle current-dot" id="${j}"></i>
      `;
    } else {
      content += `
      <i class="fas fa-circle" id="${j}"></i>
      `;
    }
  }
  content += `
    </div><!--close carousel__dots-->  
  </div><!--close carousel--> 
  `;
  return content;
};

/* -----------Create the function next/previous arrow------------ */
// Create a function to change the 3 cards when clicking to next/previous arrow
export const nextSlide = () => {
  if (state.currentFirstIndex < (experiences.length - 1)) {
    state.currentFirstIndex += 1;
  } else {
    state.currentFirstIndex += 0;
  }
  // console.log(state.currentFirstIndex);
  return renderExperiences(state.currentFirstIndex);
};
export const previousSlide = () => {
  if (state.currentFirstIndex >= 1) {
    state.currentFirstIndex -= 1;
  } else {
    state.currentFirstIndex -= 0;
  }
  console.log(state.currentFirstIndex);
  return renderExperiences(state.currentFirstIndex);
};
