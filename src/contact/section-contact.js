import { sectionTitle } from '../components/section-title/data-section-title';
import { contact } from './data-contact';
import { createSectionTitle } from '../components/section-title/section-title';
import { createButton } from '../components/button/button';

export const renderContact = () => {
  let content = '';
  content += `
    <div class="contact-container">
        <div class="contact-info">
            ${createSectionTitle(sectionTitle.contact)}
            <p class="contact-desc">${contact[0].description}</p>
            <div class="contact-download">   
              ${createButton(contact[0].download[0], 'filled', 'downloadUF', 'btn-en')}
              ${createButton(contact[0].download[1], 'filled', 'downloadF', 'btn-fr')}      
            </div>
            <div class="social-network">
              <a href="https://www.linkedin.com/in/thaongtp/"><i class="fab fa-linkedin"></i></a>
              <a href="https://github.com/thaobube"><i class="fab fa-github"></i></a>            
            </div>
            </div>
            <div class="copyright">&copy; 2021 by Thao Nguyen.<br />With Vanilla JavaScript, HTML & CSS.</div>
      </div>
      `;
  return content;
};
