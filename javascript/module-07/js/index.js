'use strict'
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: "link-1.com"
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: "link-2.com"
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: "link-3.com"
    }
  ];
  const createImage = (img) => {
    const image = document.createElement("img");
    image.classList.add("post__image");
    image.setAttribute("src", img);
    image.setAttribute("alt", "post image");

    return image;
  };

const createTitle = (title) => {
    const heading = document.createElement("h2");
    heading.classList.add("post__title");
    heading.textContent = title;

    return heading;
  };
  const createBody = (text) => {
    const body = document.createElement("p");
    body.classList.add("post__text");
    body.textContent = text;

    return body;
  };

  const createButton = (link) => {
    const button = document.createElement("a");
    button.classList.add("button");
    button.setAttribute("href", link);
    button.textContent = "Read more";

    return button;
  };

const createPostCard = ({ img, title, text, link }) => {
  const mainDiv = document.querySelector(".root");
  const postCard = document.createElement('div');
  postCard.classList.add('post');

  const image = createImage(img);
  const heading = createTitle(title);
  const body = createBody(text);
  const button = createButton(link);

  postCard.append(image, heading, body, button);


  return postCard;
};

const createCards = posts => {
  const arrayOfPosts = posts.map(post => createPostCard(post));
  
  return arrayOfPosts;

};

document.querySelector('.root').append(...createCards(posts));

