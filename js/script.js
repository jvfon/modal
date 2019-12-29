// selecting modal open button
// doing this as if there are multiple ways to select a modal buttons 
// you can't guarantee there is always going to be one way
// data-modal-target will be the button to open the modal
// anything that has the data-modal-target will be inside the openModalButtons var
const openModalButtons = document.querySelectorAll('[data-modal-target]')