const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('is-active');
});
mobileMenu.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('is-active');
});
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('is-active');
}));

//Popup details
const objWorks = {
  title: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: '<img>images/projet1.png</img>',
  technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
}
const popup = document.getElementById('popup-window');
//get button that opens the popup
const btn = document.getElementById('button');
//get span element that closes popup
const span = document.getElementsByClassName('close')[0];
//to open the button on click
btn.addEventListener ('click', () => {
  const title = document.getElementById('projectTitle');
  title.innerHTML = objWorks.title;
  const description = document.getElementById('projectDescription');
  description.innerHTML = objWorks.description;
  const image = document.getElementById('projectImage');
  image.innerHTML = objWorks.image;
  const techs = document.getElementById('tags');
  techs.innerHTML = objWorks.technologies;
  const button = document.getElementById('action');
  button.innerHTML = 'See live <img src="images/Iconlive.svg"></img>';
  button.innerHTML = 'See live <img src="images/IconGitHub.svg"></img>';
  popup.style.display = 'block';
});
//to close the popub
span.onclick = function () {
    popup.style.display = 'none';
}
//when click anywhere
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

const objWorks1 = {
  title: 'Project1',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: './images/mobileview.svg',
  technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
}

const popup1 = document.getElementById('popup-window');
//get button that opens the popup
const btn1 = document.getElementById('button1');
//get span element that closes popup
//const span = document.getElementsByClassName('close')[0];
//to open the button on click
btn1.addEventListener ('click', () => {
  const title = document.getElementById('projectTitle');
  title.innerHTML = objWorks1.title;
  const description = document.getElementById('projectDescription');
  description.innerHTML = objWorks1.description;
  const image = document.getElementById('projectImage');
  image.innerHTML = objWorks1.image;
  const techs = document.getElementById('tags');
  techs.innerHTML = objWorks1.technologies;
  const button = document.getElementById('action');
  button.innerHTML = 'See live <img src="images/Iconlive.svg"></img>';
  button.innerHTML = 'See live <img src="images/IconGitHub.svg"></img>';
  popup.style.display = 'block';
});
//to close the popub
span.onclick = function () {
    popup.style.display = 'none';
}
//when click anywhere
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

const objWorks2 = {
  title: 'Project2',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: './images/mobileview.svg',
  technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
}

const popup2 = document.getElementById('popup-window');
//get button that opens the popup
const btn2 = document.getElementById('button2');
//get span element that closes popup
//const span = document.getElementsByClassName('close')[0];
//to open the button on click
btn2.addEventListener ('click', () => {
  const title = document.getElementById('projectTitle');
  title.innerHTML = objWorks2.title;
  const description = document.getElementById('projectDescription');
  description.innerHTML = objWorks2.description;
  const image = document.getElementById('projectImage');
  image.innerHTML = objWorks2.image;
  const techs = document.getElementById('tags');
  techs.innerHTML = objWorks2.technologies;
  const button = document.getElementById('action');
  button.innerHTML = 'See live <img src="images/Iconlive.svg"></img>';
  button.innerHTML = 'See live <img src="images/IconGitHub.svg"></img>';
  popup.style.display = 'block';
});
//to close the popub
span.onclick = function () {
    popup.style.display = 'none';
}
//when click anywhere
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
}
const objWorks3 = {
  title: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: './images/mobileview.svg',
  technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
}
const objWorks4 = {
  title: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: './images/mobileview.svg',
  technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
}
const objWorks5 = {
  title: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: './images/mobileview.svg',
  technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
}
