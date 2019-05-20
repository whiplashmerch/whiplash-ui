This component style is taken from the UI toolkit. To implement this style in a Whiplash UI-styled application, create an element `<select class="select-input">` with options as you normally would. The JavaScript will then parse that element and its options and convert the HTML layout to what is expected to implement the more complex and customized select dropdown input.

```html
noSource: true
showSource: false
---
<iframe src="./elements/select-input.html" width="450" height="250" frameborder="0"> </iframe>
```

```code
lang: html
---
  <select class="select-input">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </select>
```


