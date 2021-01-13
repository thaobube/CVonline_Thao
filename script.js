import './styles.scss';
import { renderApp } from './src/views/basic-layout';
import { renderHeader } from './src/views/header';
import { renderAbout } from './src/views/section-about';
import { renderSkills, eventSkills } from './src/views/section-skills';
import { renderPortfolio } from './src/views/section-portfolio';
import {
  portfolioAll, portfolioAsp, portfolioJs, portfolioPhp, portfolioMobile, portfolioOther,
} from './src/data/data-portfolio';
import { renderEducation } from './src/views/section-education';
import { renderExperiences, nextSlide, previousSlide } from './src/views/section-experiences';
import { state } from './src/data/state';

// Construction of the basic layout
const app = document.getElementById('app');
app.innerHTML = renderApp();

// Get all elements
const header = document.querySelector('header');
const sectionAbout = document.getElementById('section-about');
const sectionSkills = document.getElementById('section-skills');
const sectionPortfolio = document.getElementById('section-portfolio');
const sectionEducation = document.getElementById('section-education');
const sectionExperiences = document.getElementById('section-experiences');

// Rendering all sections by default
header.innerHTML = renderHeader();
sectionAbout.innerHTML = renderAbout();
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

/* ------- Event for the section About---------- */
sectionAbout.addEventListener('click', (e) => {
  if (e.target.matches('.btn-me')) {
    e.preventDefault();
    state.aboutMeButton = true;
    sectionAbout.innerHTML = renderAbout();
  }
  if (e.target.matches('.btn-code')) {
    e.preventDefault();
    state.aboutMeButton = false;
    sectionAbout.innerHTML = renderAbout();
  }
});

/* ------- Event for the section Skills----------- */
// Calling the event of the section Skill:
eventSkills(sectionSkills);

/* ------- Event for the section Portfolio---------- */
sectionPortfolio.addEventListener('click', (e) => {
  if (e.target.matches('.btn-all')) {
    e.preventDefault();
    state.currentArray = portfolioAll;
    state.currentPortfolioButton = 'all';
    sectionPortfolio.innerHTML = renderPortfolio();
  }
  if (e.target.matches('.btn-asp')) {
    e.preventDefault();
    state.currentArray = portfolioAsp;
    state.currentPortfolioButton = 'asp';
    sectionPortfolio.innerHTML = renderPortfolio();
  }
  if (e.target.matches('.btn-js')) {
    e.preventDefault();
    state.currentArray = portfolioJs;
    state.currentPortfolioButton = 'js';
    sectionPortfolio.innerHTML = renderPortfolio();
  }
  if (e.target.matches('.btn-php')) {
    e.preventDefault();
    state.currentArray = portfolioPhp;
    state.currentPortfolioButton = 'php';
    sectionPortfolio.innerHTML = renderPortfolio();
  }
  if (e.target.matches('.btn-mobile')) {
    e.preventDefault();
    state.currentArray = portfolioMobile;
    state.currentPortfolioButton = 'mobile';
    sectionPortfolio.innerHTML = renderPortfolio();
  }
  if (e.target.matches('.btn-other')) {
    e.preventDefault();
    state.currentArray = portfolioOther;
    state.currentPortfolioButton = 'other';
    sectionPortfolio.innerHTML = renderPortfolio();
  }
});

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
