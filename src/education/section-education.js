import { sectionTitle } from '../components/section-title/data-section-title';
import { education } from './data-education';
import { createSectionTitle } from '../components/section-title/section-title';
// import { state } from '../base/state';

/* -----------Create the function renderEducation------------ */

export const renderEducation = () => {
  let content = `
    ${createSectionTitle(sectionTitle.education)}
    <div class="timeline">
      <div class="timeline__vertical-line">
      </div>
      <div class="timeline__content">
    `;
  content += `
    <div class="line">
      <div class="time">${education[0].time}</div>
      <div class="dot"></div>
      <div class="info">
        <div class="info__title">${education[0].title}</div>
        <div class="info__subtitle">${education[0].subtitle}</div>
        <div class="info__description">${education[0].description}
          <div class="info__link"><a href="${education[0].link}" target="_blank">See more about the ${education[0].generalTitle} <i class="fas fa-external-link-alt"></i></a></div>
        </div>

      </div>
    </div>
`;
  for (let i = 1; i < education.length; i++) {
    content += `
        <div class="line">
          <div class="time">${education[i].time}</div>
          <div class="dot"></div>
          <div class="info--hidden">
            <div class="info__title">${education[i].title}</div>
            <div class="info__subtitle">${education[i].subtitle}</div>
            <div class="info__description">${education[i].description}
              <div class="info__link"><a href="${education[i].link}">See more about the ${education[i].generalTitle} <i class="fas fa-external-link-alt"></i></a></div>
            </div> 
          </div>
        </div>
    `;
  }
  content += `
      </div>
    </div>
    `;
  return content;
};
