# whiplash-ui
Whiplash CSS/JS

## usage

To implement the Whiplash UI, run `yarn add whiplash-ui` in your project's root directory.

In your `application.css` add the line:

```
*= require whiplash-ui/stylesheets/application
```

In your `application.js` add the line:

```
//= require whiplash-ui/javascripts/behavior
```

## elements

### DotLoader loading indicator

This functionality is pulled right from the UI toolkit living style guide. To implement, create an element `<div class="loader-wrapper">` and the JS will populate it with the necessary children for animation when the page loads.

### SelectBox select input field

This component style is taken from the UI toolkit. To implement this style in a Whiplash UI-styled application, create an element `<select class="select-input">` with options as you normally would. The JavaScript will then parse that element and its options and convert the HTML layout to what is expected to implement the more complex and customized select dropdown input.

### Toggle checkbox control

The style of this control is taken from the UI toolkit. To implement in a Whiplash UI application, create an element `<input type="checkbox" class="toggle-input">` and the JS will create the required HTML structure to facilitate the complex styling of the element.

### Dropdown/up floating menu control

In order to implement this, you need to have the following HTML structure:

```
<div class="dropdown-wrapper">
	<button class="button text" data-dropdown="up-menu">Menu Button/Link</button>
	<div class="dropdown dropdown-up" id="up-menu">
		<ul class="dropdown-list">
			<li><a href="#">Stuff</a></li>
			<li><a href="#">Biz</a></li>
		</ul>
	</div>
</div>
```

There are two orientations -- a menu that drops down uses the class `dropdown-down` on the div that wraps `dropdown-list`. A menu that pops up from the button uses the class `dropdown-up`.
