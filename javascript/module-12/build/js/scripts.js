'use strict';

var form = document.querySelector('.js-form');
var input = document.querySelector('.js-input');
var buttonAdd = document.querySelector('.js-add');
var buttonDelete = document.querySelector('.js-delete');
var parent = document.querySelector('.root');
var validUrl = /^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

var sourse = document.querySelector('#tab').innerHTML.trim();
var template = Handlebars.compile(sourse);

form.addEventListener('submit', handleOnSubmit);
parent.addEventListener('click', handleOnDelete);

function handleOnSubmit(event) {
  event.preventDefault();
  var newTab = input.value;
  if (validUrl.test(newTab)) {
    fetchLink(newTab).then(function (data) {
      if (localStorage.getItem(data.url) == newTab) return alert('This tab is already here!');
      localStorage.setItem(data.url, data.url);
      //   console.log(data)
      var markup = template(data);
      parent.insertAdjacentHTML('afterbegin', markup);
    });

    form.reset();
  } else {
    alert('Invalid URL!');
  }
}
console.log(Object.keys(localStorage));
Object.keys(localStorage).forEach(function (el) {
  fetchLink(el).then(function (data) {
    var markup = template(data);
    parent.insertAdjacentHTML('afterbegin', markup);
  });
});

function fetchLink(newTab) {
  return fetch('https://api.linkpreview.net/?key=5bbc427db184bade881089c46d1ce94309e553dcca374&q=' + newTab).then(function (response) {
    if (response.ok) return response.json();
    throw new Error("Error fetching data");
  }).catch(function (error) {
    console.error("Error: ", error);
  });
}

function handleOnDelete(event) {
  event.preventDefault();
  if (event.target.nodeName !== "BUTTON") return;
  var url = event.target.parentNode.firstElementChild;
  localStorage.removeItem(url.textContent);
  //   console.log(url.textContent);
  var tab = event.target.parentNode;
  tab.remove();
}