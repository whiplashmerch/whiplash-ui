$(document).ready(function() {
  handleUIBehavior();
});

function handleUIBehavior() {
  var mobileNavButton = document.querySelector('.mobile-nav-button');
  var subMenuItem = document.querySelectorAll('.sub-menu > a, .tertiary-menu > a');
  var loaders = document.querySelectorAll('.loader-wrapper');
  var selects = document.querySelectorAll('.select-input');
  var toggles = document.querySelectorAll('.toggle-input');
  var dropdowns = document.querySelectorAll('button[data-dropdown]');

  if (mobileNavButton != null) {
    mobileNavButton.addEventListener('click', mobileNavClickHandler);
  }

  Array.prototype.forEach.call(subMenuItem, registerSubMenuClickHandlers);

  Array.prototype.forEach.call(loaders, activateLoader);

  // Array.prototype.forEach.call(selects, transformSelect);

  Array.prototype.forEach.call(toggles, transformToggle);

  Array.prototype.forEach.call(dropdowns, registerDropdownClickHandlers);
}

function mobileNavClickHandler() {
  var mobileNavButton = document.querySelector('.mobile-nav-button');
  var menu = document.querySelector('.main-menu');

  mobileNavButton.classList.toggle('open');
  menu.classList.toggle('open');
}

function registerSubMenuClickHandlers(menu) {
  menu.addEventListener('click', subMenuClickHandler);
}

function subMenuClickHandler(event) {
  var subMenuList = event.target.nextElementSibling;

  if (!subMenuList.classList.contains('active')) {
    event.preventDefault();
  }

  subMenuList.classList.toggle('active');
}

function activateLoader(loader) {
  for (var dot, i = 0; i < 3; i++) {
    dot = document.createElement('div');
    dot.classList.add('loader-dot');
    loader.appendChild(dot);
  }
}

function transformToggle(toggle) {
  var toggleSibling = toggle.nextElementSibling;
  var toggleParent = toggle.parentNode;

  var newToggle = document.createElement('div');
  var toggleInner = document.createElement('div');
  var toggleButton = document.createElement('span');
  var toggleClone = toggle.cloneNode();

  newToggle.classList.add('toggle');
  toggleInner.classList.add('toggle-inner');
  toggleButton.classList.add('toggle-button');

  newToggle.appendChild(toggleInner);

  if (toggle.getAttribute('checked')) {
    newToggle.classList.add('active');
  }

  toggleInner.appendChild(toggleButton);
  toggleInner.appendChild(toggleClone);

  toggle.parentNode.removeChild(toggle);

  if (toggleSibling) {
    toggleParent.insertBefore(newToggle, toggleSibling);
  } else {
    toggleParent.appendChild(newToggle);
  }

  newToggle.addEventListener('click', toggleClickHandler);
}

function toggleClickHandler(event) {
  event.stopPropagation();

  var parent = getParent(event.target, 'toggle');
  var input = parent.querySelector('input');
  var checked = input.getAttribute('checked');

  parent.classList.toggle('active');
  input.setAttribute('checked', checked ? '' : 'checked');
}

function registerDropdownClickHandlers(button) {
  var dropdownId = button.getAttribute('data-dropdown');
  var dropdown = document.getElementById(dropdownId);
  var parent = getParent(dropdown, 'dropdown-wrapper');

  button.addEventListener('click', function() {
    parent.classList.toggle('open');
  });
}

function getParent(element, className) {
  while (!element.classList.contains(className)) {
    element = element.parentNode;
  }

  return element;
}
