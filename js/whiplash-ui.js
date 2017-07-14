document.addEventListener('turbolinks:load', handleUIBehavior);

function handleUIBehavior() {
  var mobileNavButton = document.querySelector('.mobile-nav-button');
  var subMenuItem = document.querySelectorAll('.sub-menu > a, .tertiary-menu > a');
  var loaders = document.querySelectorAll('.loader-wrapper');

  mobileNavButton.addEventListener('click', mobileNavClickHandler);

  Array.prototype.forEach.call(subMenuItem, function (menu) {
    menu.addEventListener('click', subMenuClickHandler);
  });

  Array.prototype.forEach.call(loaders, function (loader) {
    for (var dot, i = 0; i < 3; i++) {
      dot = document.createElement('div');
      dot.classList.add('loader-dot');
      loader.appendChild(dot);
    }
  });
}

function mobileNavClickHandler() {
  var button = document.querySelector('.mobile-nav-button');
  var sideMenu = button.nextElementSibling.classList.contains('menu-wrapper');
  var menu = sideMenu ? button.nextElementSibling : document.querySelector('.top-menu .menu');

  button.classList.toggle('open');
  menu.classList.toggle('open');
}

function subMenuClickHandler(event) {
  var subMenuList = event.target.nextElementSibling;

  if (!subMenuList.classList.contains('active')) {
    event.preventDefault();
  }

  subMenuList.classList.toggle('active');
}
