import './styles.scss';
import { renderApp } from './src/views/basic-layout';
import { renderSkills, eventSkills } from './src/views/section-skills';
import { renderEducation } from './src/views/section-education';
import { renderExperiences, nextSlide, previousSlide } from './src/views/section-experiences';
import { state } from './src/data/state';

// Construction of the basic layout
const app = document.getElementById('app');
app.innerHTML = renderApp();

// Get all elements

const sectionSkills = document.getElementById('section-skills');
const sectionEducation = document.getElementById('section-education');
const sectionExperiences = document.getElementById('section-experiences');

// Rendering all sections by default
sectionSkills.innerHTML = renderSkills();
sectionEducation.innerHTML = renderEducation();
sectionExperiences.innerHTML = renderExperiences();

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
    console.log(e.target.parentNode);
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
    console.log(state.currentFirstIndex);
    sectionExperiences.innerHTML = renderExperiences();
  }
});
