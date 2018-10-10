'use strict'
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const buttonAdd = document.querySelector('.js-add');
const buttonDelete = document.querySelector('.js-delete');
const parent = document.querySelector('.root');
const validUrl = /^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

const sourse = document.querySelector('#tab').innerHTML.trim();
const template = Handlebars.compile(sourse);

form.addEventListener('submit', handleOnSubmit);
parent.addEventListener('click', handleOnDelete);

function handleOnSubmit(event) {
  event.preventDefault();
  const newTab = input.value;
  if (validUrl.test(newTab)) {
    fetchLink(newTab).then(data => {
      if (localStorage.getItem(data.url) == newTab) return alert('This tab is already here!')
      localStorage.setItem(data.url, data.url)
    //   console.log(data)
      const markup = template(data);
      parent.insertAdjacentHTML('afterbegin', markup);
    });

    form.reset();
  } else {
    alert('Invalid URL!');
  }
}

function fetchLink(newTab) {
  return fetch(`http://api.linkpreview.net/?key=5bbc427db184bade881089c46d1ce94309e553dcca374&q=${newTab}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .catch(error => {
      console.error("Error: ", error);
    });
}

function handleOnDelete(event) {
  event.preventDefault();
  if (event.target.nodeName !== "BUTTON") return;
  const url = event.target.parentNode.firstElementChild;
  localStorage.removeItem(url.textContent);
//   console.log(url.textContent);
  const tab = event.target.parentNode;
  tab.remove();
}
