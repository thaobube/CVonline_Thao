import { createLinkedButton } from '../components/button/button';

export const renderHome = () => `
<div class="home-container">
    <div class="home-overlay"></div>
    <div class="home-animation">        
        <p class="animate-text home-name">
            <span class="intro-text">Hello, I'm</span>
            <br />
            <span class="name-text">Thao Nguyen</span>
        </p>
        <p class="animate-text home-title">
            <span class="intro-text">I'm a junior Web</span>
            <br />
            <span class="title-text">App Developer</span>
        </p>
    </div>
    <div class="home-buttons">
        ${createLinkedButton('#portfolio', 'VIEW PORTFOLIO', 'filled', 'downloadUF', 'btn-asp')}
    </div>
    <p class="home-message">I’m looking for a 6 - 8 week internship starting in May 2021.</p>
    </div>
<div class="fixedButton"><a href="#home"><i class="fas fa-chevron-up"></i></a></div>
`;
//
{ /* <div class="home-buttons">
${createLinkedButton('#portfolio', 'VIEW PORTFOLIO', 'filled', 'whiteF', 'btn-asp')}
${createLinkedButton('#contact', 'CONTACT ME', 'filled', 'darkF', 'btn-all')}
</div> */ }
