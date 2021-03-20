import './styles.scss';
import { renderApp } from './src/base/basic-layout';
import { renderHeader } from './src/header/header';
import { renderHome } from './src/home/section-home';
import { renderAbout } from './src/about/section-about';
import { renderSkills, eventSkills } from './src/skill/section-skills';
import { renderPortfolio } from './src/portfolio/section-portfolio';
import {
  portfolioAll, portfolioAsp, portfolioJs, portfolioPhp, portfolioMobile, portfolioOther,
} from './src/portfolio/data-portfolio';
import { renderEducation } from './src/education/section-education';
import { renderExperiences, nextSlide, previousSlide } from './src/experience/section-experiences';
import { renderContact } from './src/contact/section-contact';
import { state } from './src/base/state';

// Construction of the basic layout
const app = document.getElementById('app');
app.innerHTML = renderApp();

// Get all elements
const header = document.querySelector('header');
const sectionHome = document.getElementById('section-home');
const sectionAbout = document.getElementById('section-about');
const sectionSkills = document.getElementById('section-skills');
const sectionPortfolio = document.getElementById('section-portfolio');
const sectionEducation = document.getElementById('section-education');
const sectionExperiences = document.getElementById('section-experiences');
const sectionContact = document.getElementById('section-contact');

// Rendering all sections by default
header.innerHTML = renderHeader();
sectionHome.innerHTML = renderHome();
sectionAbout.innerHTML = renderAbout();
sectionSkills.innerHTML = renderSkills();
sectionPortfolio.innerHTML = renderPortfolio();
sectionEducation.innerHTML = renderEducation();
sectionExperiences.innerHTML = renderExperiences();
sectionContact.innerHTML = renderContact();

/* ------- Event for the header----------- */
header.addEventListener('click', (e) => {
  if (e.target.matches('.bar')) {
    e.preventDefault();
    e.target.parentNode.classList.toggle('open');
    const menu = e.target.closest('#menu');
    // console.log(menu);
    const nav = menu.querySelector('.nav');
    // console.log(nav);
    nav.classList.toggle('open-nav');
  }
  if (e.target.matches('.nav-item')) {
    const menu = e.target.closest('#menu');
    const nav = menu.querySelector('.nav');
    const hamburger = menu.querySelector('.hamburger');
    nav.classList.remove('open-nav');
    hamburger.classList.remove('open');
  }
});
// Change header in white background when scrolling:
window.addEventListener('scroll', () => {
  const top = window.scrollY;
  if (top >= 200) {
    header.classList.add('unhidden');
  } else {
    header.classList.remove('unhidden');
  }
});
// Highlighted sections when scrolling:
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav li');
// console.log(navItems);
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
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
  if (e.target.matches('.read-more')) {
    // e.preventDefault();
    const shortDisplay = e.target.parentNode;
    shortDisplay.style.display = 'none';
    const fullDisplay = shortDisplay.parentNode.querySelector('.fullDisplay');
    fullDisplay.style.display = 'block';
  }
  if (e.target.matches('.read-less')) {
    // e.preventDefault();
    const fullDisplay = e.target.parentNode;
    fullDisplay.style.display = 'none';
    const shortDisplay = fullDisplay.parentNode.querySelector('.shortDisplay');
    shortDisplay.style.display = 'block';
  }
});

/* ------- Event for the section Skills----------- */
// Calling the event of the section Skill:
eventSkills(sectionSkills);

/* ------- Event for the section Portfolio---------- */
// Event for displaying projects according to specific button
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
    const fullDisplay = sectionPortfolio.querySelector('.fullDisplay');
    fullDisplay.style.display = 'block';
  }
  if (e.target.matches('.btn-js')) {
    e.preventDefault();
    state.currentArray = portfolioJs;
    state.currentPortfolioButton = 'js';
    sectionPortfolio.innerHTML = renderPortfolio();
    const fullDisplay = sectionPortfolio.querySelector('.fullDisplay');
    fullDisplay.style.display = 'block';
  }
  if (e.target.matches('.btn-php')) {
    e.preventDefault();
    state.currentArray = portfolioPhp;
    state.currentPortfolioButton = 'php';
    sectionPortfolio.innerHTML = renderPortfolio();
    const fullDisplay = sectionPortfolio.querySelector('.fullDisplay');
    fullDisplay.style.display = 'block';
  }
  if (e.target.matches('.btn-mobile')) {
    e.preventDefault();
    state.currentArray = portfolioMobile;
    state.currentPortfolioButton = 'mobile';
    sectionPortfolio.innerHTML = renderPortfolio();
    const fullDisplay = sectionPortfolio.querySelector('.fullDisplay');
    fullDisplay.style.display = 'block';
  }
  if (e.target.matches('.btn-other')) {
    e.preventDefault();
    state.currentArray = portfolioOther;
    state.currentPortfolioButton = 'other';
    sectionPortfolio.innerHTML = renderPortfolio();
    const fullDisplay = sectionPortfolio.querySelector('.fullDisplay');
    fullDisplay.style.display = 'block';
  }
});
// Event for seeing more/less projects
sectionPortfolio.addEventListener('click', (e) => {
  if (e.target.matches('.see-more')) {
    // e.preventDefault();
    const partialDisplay = e.target.parentNode;
    partialDisplay.style.display = 'none';
    const fullDisplay = partialDisplay.parentNode.querySelector('.fullDisplay');
    fullDisplay.style.display = 'block';
  }
  if (e.target.matches('.see-less')) {
    // e.preventDefault();
    const fullDisplay = e.target.parentNode;
    fullDisplay.style.display = 'none';
    const partialDisplay = fullDisplay.parentNode.querySelector('.partialDisplay');
    partialDisplay.style.display = 'block';
  }
});
// Event for showing/hiding Modal + play/pause video
sectionPortfolio.addEventListener('click', (e) => {
  // Show Modal
  if (e.target.matches('.seeMore')) {
    // e.preventDefault();
    const targetCard = e.target.closest('.card');
    const targetModal = targetCard.querySelector('.card__modal--hidden');
    targetModal.classList.remove('card__modal--hidden');
    targetModal.classList.add('card__modal');
    const targetVideo = targetCard.querySelector('video');
    if (targetVideo !== null) {
      targetVideo.play();
    }
  }
  // Hide Modal
  if (e.target.matches('.fa-times-circle')) {
    e.preventDefault();
    const targetCard = e.target.closest('.card');
    const targetModal = targetCard.querySelector('.card__modal');
    targetModal.classList.remove('card__modal');
    targetModal.classList.add('card__modal--hidden');
    const targetVideo = targetCard.querySelector('video');
    if (targetVideo !== null) {
      targetVideo.pause();
    }
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
// sectionEducation.addEventListener('mouseover', (e) => {
//   if (e.target.matches('.info__title')) {
//     // hide the previous item
//     const infoVisible = sectionEducation.querySelector('.info');
//     infoVisible.classList.remove('info');
//     infoVisible.classList.add('info--hidden');
//     // display the clicked item
//     e.target.parentNode.classList.remove('info--hidden');
//     e.target.parentNode.classList.add('info');
//   }
// });

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
