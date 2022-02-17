const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');
burger.addEventListener('click',function(){
  burger.classList.toggle('active');
  list.classList.toggle('active');
})