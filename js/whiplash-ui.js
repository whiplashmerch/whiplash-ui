// ------------------------- //
// ----- Begin New Nav ----- //
// ------------------------- //

jQuery(function() {

  function debounce(func, wait, immediate) {
    var timeout;

    return function() {
      var context = this, args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };

  // Handle mobile User menu animation
  $('.dynamic-dropdown-button').click(function() {
    var $button = $(this);
    var $dynamicDropdown = $button.siblings('.dynamic-dropdown');
    var dropdownId = $dynamicDropdown.attr('id');
    var timing = window.innerWidth < 980 ? 300 : 0;

    // Close all other dropdowns
    $('.dynamic-dropdown:not(#' + dropdownId + ')').removeClass('slide').siblings('button').removeClass('open');
    $('body').removeAttr('style');

    setTimeout(function() {
      $('.dynamic-dropdown:not(#' + dropdownId + ')').addClass('hidden')
      $(".dropdown-wrapper").removeClass("open").find('.dropdown').removeAttr('style')
    }, timing);

    $button.toggleClass('open');

    // Animate in
    if ($dynamicDropdown.hasClass('hidden')) {
      $dynamicDropdown.removeClass('hidden').closest('.dynamic-dropdown-wrapper').addClass('open');

      setTimeout(function() {
        $dynamicDropdown.addClass('slide');
        
        if (window.innerWidth < 980) {
          $('body').css({ 'overflow': 'hidden' });
        }
      }, 100);

    // Animate out
    } else {
      $dynamicDropdown.removeClass('slide');
      $dynamicDropdown.closest('.dynamic-dropdown-wrapper').removeClass('open');

      setTimeout(function() {
        $dynamicDropdown.addClass('hidden');
      }, timing);
    }
  });

  $('.act-as-button').on('click', function() {
    var $dropdownWrapper = $(this).closest('.dropdown-wrapper');
    
    setTimeout(function() {
      // If dropdown is expanded
      if ($dropdownWrapper.hasClass('open')) {
        $dropdownWrapper.find('input').focus();
      }
    }, 500);
  });

  // Add focus to search form - Desktop
  $('.search-icon').click(function() {
    $('#nav-search-form').find('input').focus();
  });

  // Add focus to search form - Mobile
  $('.mobile-nav-button').click(function() {
    $('#mobile-nav-search-form').find('input').focus();
  });

  $('a.unset').click(function() {
    changeIdentityTransition();
  });

  // Remove overflow style from body on window resize from mobile to desktop
  var resetBody = debounce(function() {
    if (window.innerWidth >= 980) {
      $('body').removeAttr('style');
    }
  }, 300, false);

  // Add overflow:hidden to body on window resize from desktop to mobile if a dynamic dropdown is open
  var hideBodyOverflow = debounce(function() {
    if (window.innerWidth < 980 && $('.dynamic-dropdown-wrapper.open').length) {
      $('body').css({ 'overflow': 'hidden' });
    }
  }, 300, false);
  
  window.addEventListener('resize', function() {
    resetBody();
    hideBodyOverflow();
  });

});

// ----------------------- //
// ----- End New Nav ----- //
// ----------------------- //


// Dim the body element during page refresh when identity is changed.
function changeIdentityTransition() {
  document.body.style.transition = "opacity .333s ease-out";
  document.body.style.opacity = "0.5";
  document.body.style.pointerEvents = "none";
}

$(document).ready(function() {
  handleUIBehavior();
});

function handleUIBehavior() {
  // var dynamicDropdownButton = document.querySelector('.dynamic-dropdown-button');
  var subMenuItem = document.querySelectorAll('.sub-menu > a, .tertiary-menu > a');
  var loaders = document.querySelectorAll('.loader-wrapper');
  var selects = document.querySelectorAll('.select-input');
  var toggles = document.querySelectorAll('.toggle-input');
  var dropdowns = document.querySelectorAll('button[data-dropdown]');

  // if (dynamicDropdownButton != null) {
  //   dynamicDropdownButton.addEventListener('click', dynamicDropdownClickHandler);
  // }

  Array.prototype.forEach.call(subMenuItem, registerSubMenuClickHandlers);

  Array.prototype.forEach.call(loaders, activateLoader);

  // Array.prototype.forEach.call(selects, transformSelect);

  Array.prototype.forEach.call(toggles, transformToggle);

  Array.prototype.forEach.call(dropdowns, registerDropdownClickHandlers);
}

// function dynamicDropdownClickHandler() {
//   var dynamicDropdownButton = document.querySelector('.dynamic-dropdown-button');
//   var dynamicDropdown = document.querySelector('.dynamic-dropdown');

//   dynamicDropdownButton.classList.toggle('open');
//   dynamicDropdown.classList.toggle('open');
// }

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
    console.log('button', button);
    parent.classList.toggle('open');
  });
}

function getParent(element, className) {
  while (!element.classList.contains(className)) {
    element = element.parentNode;
  }

  return element;
}
