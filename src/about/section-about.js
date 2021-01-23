import { sectionTitle } from '../components/section-title/data-section-title';
import { about } from './data-about';
import { createSectionTitle } from '../components/section-title/section-title';
import { createButton } from '../components/button/button';
import { state } from '../base/state';

export const renderAbout = () => {
  let content = `
  ${createSectionTitle(sectionTitle.about)}
  <div class="about-container">
    <div class="profile-photo">
      <img src="./images/profile.jpg" alt="logo"> 
      <div class="photo-shadow"></div>
    </div>
    <div class="about">
    `;
  if (state.aboutMeButton) {
    content += `
      <div class="about__option">
      ${createButton(about[0].title, 'filled', 'darkF', 'btn-me')}
      ${createButton(about[1].title, 'filled', 'whiteF', 'btn-code')}
      </div>
      <div class="about__content">
        <div class="about-me">
        ${about[0].description}
        </div>
      </div>
    </div>
  </div>
    `;
  } else {
    content += `
      <div class="about__option">
      ${createButton(about[0].title, 'filled', 'whiteF', 'btn-me')}
      ${createButton(about[1].title, 'filled', 'darkF', 'btn-code')}
      </div>
      <div class="about__content">        
        <div class="about-code">
        ${about[1].description}
        </div>
      </div>
    </div>
  </div>
    `;
  }
  return content;
};