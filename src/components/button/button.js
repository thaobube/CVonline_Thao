// Create button
export const createButton = (nameButton, state, color, addedClass) => `
<a class="btn btn-${state} btn-${color}" href="#"><span class="${addedClass}">${nameButton}</span></a>
`;
