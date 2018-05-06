
var mobMenu = document.querySelector('.main-nav__trigger');
var accordion = document.querySelector('.main-nav__dropdown');
var mobMenuClickHandler = function(){
  if (!(accordion.classList.contains('hidden'))) {
    accordion.classList.add('hidden');
  } else
  accordion.classList.remove('hidden');
};
mobMenu.addEventListener('click', mobMenuClickHandler);
