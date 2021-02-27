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
        <div class="about-subtitle">
          ${about[0].subtitle}
        </div>
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
      <div class="about-subtitle">
      ${about[1].subtitle}
      </div> 
      <div class="about-code">
          <div class="shortDisplay">
            <div class="reason-item">
              <span class="reason-subtitle">
              ${about[1].reasons[0].subtitle} - 
              </span>
              <span class="reason-content">
                ${about[1].reasons[0].content}
              </span>
            </div> 
            <div class="reason-item">
              <span class="reason-subtitle">
                ${about[1].reasons[1].subtitle} - 
              </span>
              <span class="reason-content">
                ${about[1].reasons[1].content}
              </span>
            </div>
            <p class="read-more">Read More <i class="fas fa-long-arrow-alt-right"></i></p>
          </div>
          <div class="fullDisplay">
            <div class="reason-item">
              <span class="reason-subtitle">
              ${about[1].reasons[0].subtitle} - 
              </span>
              <span class="reason-content">
                ${about[1].reasons[0].content}
              </span>
            </div> 
            <div class="reason-item">
              <span class="reason-subtitle">
                ${about[1].reasons[1].subtitle} - 
              </span>
              <span class="reason-content">
                ${about[1].reasons[1].content}
              </span>
            </div>
            <div class="reason-item">
              <span class="reason-subtitle">
                ${about[1].reasons[2].subtitle} - 
              </span>
              <span class="reason-content">
                ${about[1].reasons[2].content}
              </span>
            </div>
            <div class="reason-item">
              <span class="reason-subtitle">
                ${about[1].reasons[3].subtitle} - 
              </span>
              <span class="reason-content">
                ${about[1].reasons[3].content}
              </span>
            </div>
            <p class="read-less"><i class="fas fa-long-arrow-alt-left"></i> Read Less</p>
          </div>
        </div>    
      </div>
    </div>
  </div>
    `;
  }
  return content;
};

{ /* <div class="about-code">
<div class="reason-line1">
  <div class="reason-item">
    <p class="reason-subtitle">
      ${about[1].reasons[0].subtitle}
    </p>
    <p class="reason-content">
      ${about[1].reasons[0].content}
    </p>
  </div>
  <div class="reason-item">
    <p class="reason-subtitle">
      ${about[1].reasons[1].subtitle}
    </p>
    <p class="reason-content">
      ${about[1].reasons[1].content}
    </p>
  </div>
</div>
<div class="reason-line2">
  <div class="reason-item">
    <p class="reason-subtitle">
      ${about[1].reasons[3].subtitle}
    </p>
    <p class="reason-content">
      ${about[1].reasons[3].content}
    </p>
  </div>
  <div class="reason-item">
    <p class="reason-subtitle">
      ${about[1].reasons[4].subtitle}
    </p>
    <p class="reason-content">
      ${about[1].reasons[4].content}
    </p>
  </div>
</div>
</div> */ }
