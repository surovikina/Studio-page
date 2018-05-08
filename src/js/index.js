
(function(){

var mobMenu = document.querySelector('.main-nav__trigger');
var accordion = document.querySelector('.main-nav__dropdown');
var mobMenuClickHandler = function(){
  if (!(accordion.classList.contains('hidden'))) {
    accordion.classList.add('hidden');
  } else
  accordion.classList.remove('hidden');
};
mobMenu.addEventListener('click', mobMenuClickHandler);

var loadImages = function () {
    var image = document.querySelector('.works__item-img');
    var imgLarge = document.querySelector('.works__item-img--large');
  if (window.innerWidth > 1280) {

    image.style.display = 'none';
    imgLarge.style.display = 'block';

  }
  else {

      image.style.display = 'block';
      imgLarge.style.display = 'none';
  }
};
document.addEventListener('DOMContentLoaded', loadImages);
window.addEventListener('resize', loadImages);

}());
