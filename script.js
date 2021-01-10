import './styles.scss';
import { renderApp } from './src/views/basic-layout';
import { renderHeader } from './src/views/header';
import { renderSkills, eventSkills } from './src/views/section-skills';
import { renderPortfolio } from './src/views/section-portfolio';
import { renderEducation } from './src/views/section-education';
import { renderExperiences, nextSlide, previousSlide } from './src/views/section-experiences';
import { state } from './src/data/state';

// Construction of the basic layout
const app = document.getElementById('app');
app.innerHTML = renderApp();

// Get all elements
const header = document.querySelector('header');
const sectionSkills = document.getElementById('section-skills');
const sectionPortfolio = document.getElementById('section-portfolio');
const sectionEducation = document.getElementById('section-education');
const sectionExperiences = document.getElementById('section-experiences');

// Rendering all sections by default
header.innerHTML = renderHeader();
sectionSkills.innerHTML = renderSkills();
sectionPortfolio.innerHTML = renderPortfolio();
sectionEducation.innerHTML = renderEducation();
sectionExperiences.innerHTML = renderExperiences();

/* ------- Event for the header----------- */
header.addEventListener('click', (e) => {
  if (e.target.matches('.bar')) {
    e.target.parentNode.classList.toggle('open');
    const menu = e.target.closest('#menu');
    // console.log(menu);
    const nav = menu.querySelector('.nav');
    // console.log(nav);
    nav.classList.toggle('open-nav');
  }
});

/* ------- Event for the section Skills----------- */
// Calling the event of the section Skill:
eventSkills(sectionSkills);

/* ------- Event for the section Education----------- */
sectionEducation.addEventListener('click', (e) => {
  if (e.target.matches('.info__title')) {
    // hide the previous item
    const infoVisible = sectionEducation.querySelector('.info');
    infoVisible.classList.remove('info');
    infoVisible.classList.add('info--hidden');
    // display the clicked item
    e.target.parentNode.classList.remove('info--hidden');
    e.target.parentNode.classList.add('info');
  }
});

/* ------- Event for the section Experiences----------- */
sectionExperiences.addEventListener('click', (e) => {
  // Event when clicking to next arrow
  if (e.target.matches('.fa-angle-right')) {
    sectionExperiences.innerHTML = nextSlide();
  }
  // Event when clicking to previous arrow
  if (e.target.matches('.fa-angle-left')) {
    sectionExperiences.innerHTML = previousSlide();
  }
  // Event when clicking to dot
  if (e.target.matches('.fa-circle')) {
    const index = e.target.id;
    // Note:'index' is string, it is necessary to convert into number
    state.currentFirstIndex = parseInt(index, 10);
    // console.log(state.currentFirstIndex);
    sectionExperiences.innerHTML = renderExperiences();
  }
});
