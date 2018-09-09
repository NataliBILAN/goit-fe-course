'use strict'
/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");
const tBody = document.querySelector("table > tbody");

getBtn.addEventListener("click", handleOnClick);

/*
  @param {FormEvent} evt
*/
function fetchUsers() {
    return fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .catch(error => {
            console.error("Error: ", error);
        });
};

function updateView(users) {
    const htmlString = users.reduce((acc, user) => acc + createTable(user),
        "");
    tBody.innerHTML = htmlString;
}

function handleOnClick() {
    fetchUsers().then(updateView);
}

function createTableRow({
    id,
    name,
    age
}) {
    return `
    <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${age}</td>
    </tr>
    `;
}