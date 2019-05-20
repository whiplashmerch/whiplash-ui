In order to implement this, you need to have the following HTML structure:

There are two orientations -- a menu that drops down uses the class dropdown-down on the div that wraps dropdown-list. A menu that pops up from the button uses the class dropdown-up.

```html
noSource: true
---
<iframe src="./elements/dropdown.html" width="600" height="400" frameborder="0"> </iframe>
```

```code
lang: html
---
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