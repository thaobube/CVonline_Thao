// Create button
export const createButton = (nameButton, state, color, addedClass) => `
<a class="btn btn-${state} btn-${color}" href="#"><span class="${addedClass}">${nameButton}</span></a>
`;

// Create Linked Button with Target Blank
export const createLinkedButton = (link, nameButton, state, color, addedClass) => `
<a href="${link}" target="_blank" class="btn btn-${state} btn-${color}"><span class="${addedClass}">${nameButton}</span></a>
`;
// Create Linked Button without Target Blank
export const createLinkedButtonW = (link, nameButton, state, color, addedClass) => `
<a href="${link}" class="btn btn-${state} btn-${color}"><span class="${addedClass}">${nameButton}</span></a>
`;
