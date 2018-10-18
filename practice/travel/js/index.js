'use strict'
const buttonOpen = document.querySelector('.js-open-modal');
const modalWindow = document.querySelector('.modal');
const buttonClose = document.querySelector('.js-close-modal');

function handleOpenWindow(event){
    event.preventDefault();
    modalWindow.classList.add('.js-modal-show');
}
buttonOpen.addEventListener('click', handleOpenWindow);
// debugger
function handleCloseWindow(event){
   if(event.target.tagName === 'A'){
        modalWindow.classList.remove('.js-modal-show');
   }
}
buttonClose.addEventListener('click', handleCloseWindow);