/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное

⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
- При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
  на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
  диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
  регулярные выражения для валидации url.
      
- Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
  для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/
'use strict'
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const buttonAdd = document.querySelector('.js-add');
const buttonDelete = document.querySelector('.js-delete');
const parent = document.querySelector('.root');
const validUrl =/^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

const sourse = document.querySelector('#tab').innerHTML.trim();
const template = Handlebars.compile(sourse);



form.addEventListener('submit', handleOnSubmit);
parent.addEventListener('click', handleOnDelete);


function handleOnSubmit(event){
  event.preventDefault();
  const newTab=input.value;
if (validUrl.test(newTab)){
  fetchLink(newTab).then(data => {
    if(localStorage.getItem(data.url) == newTab) return alert('This tab is already here!')
    localStorage.setItem(data.url, data.url)
    console.log(data) 
    const markup = template(data);
    parent.insertAdjacentHTML('afterbegin', markup);
  });

  form.reset();
}
  else {
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
 
function handleOnDelete(event){
  event.preventDefault();
  if (event.target.nodeName !== "BUTTON") return;

// console.log(localStorage);
// console.log(Object.keys(localStorage)); 
const urlForDelete = document.querySelector('.js-li-url');
console.log(urlForDelete);
const newKeys = Object.keys(localStorage)
 console.log(newKeys);


  const tab = event.target.parentNode;
  tab.remove();
}