'use strict'
const form = document.querySelector('.js-form');
const newTab = document.querySelector('.js-input');
const buttonAdd = document.querySelector('.js-add');
const buttonDelete = document.querySelector('.js-delete');
const parent = document.querySelector('.root');

const sourse = document.querySelector('#tab').innerHTML.trim();
  const template = Handlebars.compile(sourse);
//   const markup = arrOfinputs.reduce((acc, item) => acc + template(item), '');
//   const parent = document.querySelector('.root');

const validUrl = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/;

form.addEventListener('submit', handleOnSubmit);


function handleOnSubmit(event){
  event.preventDefault();
if (validUrl.test(newTab.value)){
   const markup = template(newTab.value);
  parent.insertAdjacentHTML('afterbegin', markup);
  
}
  else {
    alert('Invalid URL!');
  }

}
console.log(newTab.value)  

  