document.addEventListener('turbolinks:load', handleUIBehavior);

function handleUIBehavior() {
  var mobileNavButton = document.querySelector('.mobile-nav-button');
  var subMenuItem = document.querySelectorAll('.sub-menu > a, .tertiary-menu > a');
  var loaders = document.querySelectorAll('.loader-wrapper');
  var toggles = document.querySelectorAll('.toggle-input');

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

  Array.prototype.forEach.call(toggles, function (toggle) {
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

function toggleClickHandler(event) {
  event.stopPropagation();

  var parent = event.target;

  while (!parent.classList.contains('toggle')) {
	parent = parent.parentNode;
  }

  var input = parent.querySelector('input');
  var checked = input.getAttribute('checked');

  parent.classList.toggle('active');
  input.setAttribute('checked', checked ? '' : 'checked');
}
