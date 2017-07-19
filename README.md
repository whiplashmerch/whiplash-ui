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

### Toggle checkbox control

The style of this control is taken from the UI toolkit. To implement in a Whiplash UI application, create an element `<input type="checkbox" class="toggle-input">` and the JS will create the required HTML structure to facilitate the complex styling of the element.
