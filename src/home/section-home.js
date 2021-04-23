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
        <a href="#portfolio" class="btn btn-homeUF"><span>VIEW PORTFOLIO</span></a>
        <a href="./CV/CV_ThaoNguyen_EN_website.pdf" target="_blank" class="btn btn-homeF"><span>DOWNLOAD CV</span></a>
    </div>
    <p class="home-message">My favourite technologies to work with are C#.Net and Angular</p>
    </div>
<div class="fixedButton"><a href="#home"><i class="fas fa-chevron-up"></i></a></div>
`;
