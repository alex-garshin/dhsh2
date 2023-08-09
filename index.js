const menu = document.querySelector('.header__menu');
const buttonMenu = menu.querySelector('.header__menu-burger');
const menuLinks = menu.querySelector('.header__menu-links');
const menuLink = menu.querySelectorAll('.header__menu-link');

buttonMenu.addEventListener('click', () => {
    switchMenu();
  });
  
  const switchMenu = () => {
    menuLinks.classList.toggle('menu__links_opened');
  };