import { sectionTitle } from '../components/section-title/data-section-title';
import { skills } from './data-skills';
import { createSectionTitle } from '../components/section-title/section-title';

/* -----------Create the function renderSkills------------ */

// Using the 'map' for 'skills[i].contentClick' => return an array
// then using 'join('')' to join all the item to a string
export const renderSkills = () => {
  let content = `
  ${createSectionTitle(sectionTitle.skills)}
  <div id="hex-container">
  `;
  for (let i = 0; i < skills.length; i++) {
    content += `
    <div class="hex-shape">
        <span class="hex">
            <div class="hex__heading">${skills[i].heading}</div>
            <div class="hex__title">${skills[i].title}</div>
            <div class="hex__description">${skills[i].description}</div>
            <div class="hex__hover"></div>
            <div class="angle--down"><i class="fas fa-angle-down"></i></div>
        </span>
        <span class="hex-click">
            <div class="hex-click__title">${skills[i].icon} ${skills[i].title}</div>
            ${skills[i].contentClick.map((el) => `<div class="hex-click__item">${el}</div>`).join('')}
            <div class="angle--up"><i class="fas fa-angle-up"></i></div>
        </span>
    </div>
  `;
  }
  content += '</div>';
  return content;
};

/* -----------Create the function eventSkills------------ */
export const eventSkills = (sectionSkills) => {
// Event when doing the mouseover & mouseout the hexagon
  sectionSkills.addEventListener('mouseover', (e) => {
    if (e.target.matches('.hex__hover')) {
      const selectedHexShape = e.target.closest('.hex-shape');
      selectedHexShape.classList.add('hex-shape--hover');
    }
  });
  sectionSkills.addEventListener('mouseout', (e) => {
    if (e.target.matches('.hex__hover')) {
      const selectedHexShape = e.target.closest('.hex-shape');
      selectedHexShape.classList.remove('hex-shape--hover');
    }
  });

  // Event when clicking to see more (angle - down) & to see less (angle - up)
  sectionSkills.addEventListener('click', (e) => {
    if (e.target.matches('.fa-angle-down')) {
      const selectedHex = e.target.closest('.hex');
      const selectedHexClick = e.target.closest('.hex-shape').querySelector('.hex-click');
      selectedHex.style.display = 'none';
      selectedHexClick.style.display = 'inline';
    }
    if (e.target.matches('.fa-angle-up')) {
      const selectedHexClick = e.target.closest('.hex-click');
      const selectedHex = e.target.closest('.hex-shape').querySelector('.hex');
      selectedHex.style.display = 'inline';
      selectedHexClick.style.display = 'none';
    }
  });
};
