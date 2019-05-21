document.addEventListener('turbolinks:load', handleUIBehavior);

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

  Array.prototype.forEach.call(selects, transformSelect);

  Array.prototype.forEach.call(toggles, transformToggle);

  Array.prototype.forEach.call(dropdowns, registerDropdownClickHandlers);
}

function mobileNavClickHandler() {
  var button = document.querySelector('.mobile-nav-button');
  var hasSideMenu = button.nextElementSibling.classList.contains('menu-wrapper');
  var menu = hasSideMenu ? button.nextElementSibling : document.querySelector('.top-menu .menu');

  button.classList.toggle('open');
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

function transformSelect(select) {
  var inputName = select.getAttribute('name');
  var selectedOption = select.querySelector('option[selected]') || select.firstElementChild;
  var inputValue = selectedOption.getAttribute('value') || '';
  var selectedText = selectedOption.textContent;

  var selectWrapper = document.createElement('div');
  var selectInput = document.createElement('input');
  var selectSelection = document.createElement('div');
  var selectListWrapper = document.createElement('div');
  var selectList = document.createElement('ul');

  selectWrapper.classList.add('select-wrapper');
  selectSelection.classList.add('select-selection');
  selectListWrapper.classList.add('select-list-wrapper');

  selectInput.setAttribute('type', 'hidden');
  selectInput.setAttribute('name', inputName);
  selectInput.setAttribute('value', inputValue);

  selectSelection.textContent = selectedText;

  selectWrapper.appendChild(selectInput);
  selectWrapper.appendChild(selectSelection);
  selectWrapper.appendChild(selectListWrapper);
  selectListWrapper.appendChild(selectList);

  Array.prototype.reduce.call(select.getElementsByTagName('option'), addSelectOption, selectList);

  select.parentNode.insertBefore(selectWrapper, select);
  select.parentNode.removeChild(select);

  selectSelection.addEventListener('click', selectOpenHandler);
}

function addSelectOption(selectList, option) {
  var value = option.getAttribute('value');
  var text = option.textContent;
  var selectItem = document.createElement('li');
  var selectDiv = document.createElement('div');

  selectItem.appendChild(selectDiv);
  selectDiv.setAttribute('value', value);
  selectDiv.textContent = text;

  selectList.appendChild(selectItem);

  selectItem.addEventListener('click', selectNewSelectionHandler);

  return selectList;
}

function selectNewSelectionHandler(event) {
  var option = event.target.firstElementChild || event.target;
  var newVal = option.getAttribute('value');
  var text = option.textContent;
  var parent = getParent(event.target, 'select-wrapper');
  var input = parent.firstElementChild;
  var selection = input.nextElementSibling;

  input.setAttribute('value', newVal);
  selection.textContent = text;

  parent.classList.remove('open');
}

function selectOpenHandler(event) {
  var parent = getParent(event.target, 'select-wrapper');

  parent.classList.add('open');
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

  button.addEventListener('click', function() {
    dropdown.classList.toggle('open');
  });
}

function getParent(element, className) {
  while (!element.classList.contains(className)) {
    element = element.parentNode;
  }

  return element;
}