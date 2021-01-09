import { nav } from '../data/data';

export const renderHeader = () => {
  let content = `        
    <div id="menu">
        <div class="menu--hamburger">
            <div class="logo">T-N</div>
            <div class="hamburger">
                <div id="bar1" class="bar"></div>
                <div id="bar2" class="bar"></div>
                <div id="bar3" class="bar"></div>
            </div>
        </div>
        <ul class="nav" id="nav">
        `;
  for (const item of nav) {
    content += ` 
            <li><a href="#">${item}</a></li>
            `;
  }
  content += ` 
        </ul>
    </div>    
    `;
  return content;
};
