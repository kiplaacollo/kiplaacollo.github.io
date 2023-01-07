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

// Popup details
const objWorks = [
  {
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    linkSource: 'https//www.githubrepo',
    linkLive: 'https//www.gitpages',
  },
    {
      title: 'Project2',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      image: '',
      technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
      linkSource: 'https//www.githubrepo',
      linkLive: 'https//www.gitpages',
  },
  {
    title: 'Project3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    linkSource: 'https//www.githubrepo',
    linkLive: 'https//www.gitpages',
  },
  {
    title: 'Project 4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    linkSource: 'https//www.githubrepo',
    linkLive: 'https//www.gitpages',
  },
  {
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    linkSource: 'https//www.githubrepo',
    linkLive: 'https//www.gitpages',
  },
  {
    title: 'Project 5',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    linkSource: 'See Live <img src="images/Iconlive.svg"></img>',
    linkLive: 'https//www.gitpages',
  }
];

const workBox= document.querySelector(".card_Work_Row_1")
const popup = document.getElementById('popup-window');
workBox.addEventListener('click',(event)=>{
  let index=event.target.id
  // get button that opens the popup
  const btn = document.getElementById(index);
  // to open the button on click
  
    const title = document.getElementById('projectTitle');
    title.innerHTML = objWorks[index].title;
    const description = document.getElementById('projectDescription');
    description.innerHTML = objWorks[index].description;
    const image = document.getElementById('projectImage');
    image.innerHTML = objWorks[index].image;
  
    const techs = document.getElementById('tags');
    for (let i = 0; i < objWorks[index].technologies.length; i += 1) {
      techs.innerHTML = `<ul><li><button>${objWorks[0].technologies[0]}</button></li></ul>
                          <ul><li><button>${objWorks[0].technologies[1]}</button></li></ul>
                          <ul><li><button>${objWorks[0].technologies[2]}</button></li></ul>
                          <ul><li><button>${objWorks[0].technologies[3]}</button></li></ul>`;
    }
  
    popup.style.display = 'block';
    document.body.style.overflow = 'none';
  })
// get span element that closes popup
const span = document.getElementById('close');
// to close the popub
span.onclick = function () {
  popup.style.display = 'none';
};
// when click anywhere
window.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}