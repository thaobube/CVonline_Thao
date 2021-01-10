// Create title
export const createSectionTitle = ({ mainTitle, subTitle }) => ` 
<div class="section-title">
    <div class="section-title--main">${mainTitle}</div>
    <hr class="section-title__hr--above">
    <hr class="section-title__hr--below">
    <div class="section-title--sub">${subTitle}</div>
</div>
`;

// Create button
export const createButton = (nameButton, state, color) => `
<a class="btn btn-${state} btn-${color}" href="#"><span>${nameButton}</span></a>
`;
