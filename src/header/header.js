import { nav } from './data-header';

export const renderHeader = () => {
  let content = `        
    <div id="menu">
        <div class="menu--hamburger">
            <div class="logo"><a href="#home">
              <img src="./images/logo.png" alt="logo"/>
            </div>
            <div class="hamburger">
                <div id="bar1" class="bar"></div>
                <div id="bar2" class="bar"></div>
                <div id="bar3" class="bar"></div>
            </div>
        </div>
        <ul class="nav" id="nav">
        <li class="section-home active"><a class="nav-item" href="#home">home</a></li>
        `;
  for (const item of nav) {
    content += ` 
            <li class="section-${item}"><a class="nav-item" href="#${item}">${item}</a></li>
            `;
  }
  content += ` 
        </ul>
    </div>    
    `;
  return content;
};
