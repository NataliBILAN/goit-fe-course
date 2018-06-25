// Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
//     * sharm - 15
//     * hurgada - 25
//     * taba - 6.
//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//   результат сохранить в переменную.
//   Необходимо проверить являются ли введенные данные целым положительным числом.

//     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
//       "Ошибка ввода" и больше ничего не делает.
//     - В случае верного ввода, последовательно проверить кол-во мест в группах,
//       и кол-во необходимых мест введенных пользователем.
//   Если была найдена группа в которой количество мест больше либо равно необходимому,
//   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
//   пользоваетель быть в этой группе?
//     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
//     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

//   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
// */

const avaiblePlacesSharm = 15;
const avaiblePlacesHurgada = 25;
const avaiblePlacesTaba = 6;
const userInputPlaces = prompt("Введите,пожалуйста, число необходимых мест");

console.log(userInputPlaces);
console.log (typeof(userInputPlaces));



const validInputPlaces = userInputPlaces !== null && !Number.isNaN(userInputPlaces) && userInputPlaces>=0 && Number.isInteger(Number(userInputPlaces));
console.log (typeof(userInputPlaces));



if(validInputPlaces){
  if(userInputPlaces <= avaiblePlacesSharm){
    const userAnswear=confirm('Доступны места в Шарм-эль-Шейх. Согласны отправиться в Шарм-эль-Шейх?')
    
    if(userAnswear==true){
      alert('Приятного путешествия в Шарм-эль-Шейх!')
    } else {
      alert('Нам очень жаль, приходите еще!')
    }}
  
  else if(userInputPlaces <= avaiblePlacesHurgada){
    const userAnswear=confirm('Доступны места в Хургаде. Согласны отправиться в Хургаду?')
    
    if(userAnswear==true){
      alert('Приятного путешествия в Хургаду!')
    } else {
      alert('Нам очень жаль, приходите еще!')
    }
  }
  
  else if(userInputPlaces <= avaiblePlacesTaba){
    const userAnswear=confirm('Доступны места в Табе. Согласны отправиться в Табу?')
    
    if(userAnswear==true){
      alert('Приятного путешествия в Табу!')
    } else {
      
      alert('Нам очень жаль, приходите еще!')
    }}
  
  else if(userInputPlaces>avaiblePlacesHurgada && userInputPlaces>avaiblePlacesSharm){
    alert ('Извините, столько мест нет ни в одной группе!')
  }
}
  else {
   alert('Ошибка ввода')
}