import { sectionTitle } from '../components/section-title/data-section-title';
import { contact } from './data-contact';
import { createSectionTitle } from '../components/section-title/section-title';
import { createLinkedButton } from '../components/button/button';

export const renderContact = () => {
  let content = '';
  content += `
      <div class="contact-container">
          <div class="contact-info">
            ${createSectionTitle(sectionTitle.contact)}
            <p class="contact-desc">${contact[0].description}</p>
            <div class="contact-download">   
              ${createLinkedButton('./CV/CV_ThaoNguyen_EN_website.pdf', contact[0].download[0], 'filled', 'downloadUF', 'btn-en')}
              ${createLinkedButton('./CV/CV_ThaoNguyen_FR_website.pdf', contact[0].download[1], 'filled', 'downloadF', 'btn-fr')}      
            </div>
            <div class="social-network">
              <a href="https://www.linkedin.com/in/thaongtp/" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a href="https://github.com/thaobube" target="_blank"><i class="fab fa-github"></i></a>            
            </div>
          </div>
          <footer class="footer">
            <hr />
            <div class="footer-container">
              <div class="copyright">&copy; 2021 by Thao Nguyen.<br />With Vanilla JavaScript & SASS.</div>
              <div class="fun-hobbies">
                My little fun hobbies:&nbsp;&nbsp; 
                <a href="https://www.youtube.com/user/concut88/featured" target="_blank"><i class="fab fa-youtube"></i></a>
                &nbsp;&nbsp;
                <a href="https://www.instagram.com/bubecraft/" target="_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </footer>
      </div>
      `;
  return content;
};
