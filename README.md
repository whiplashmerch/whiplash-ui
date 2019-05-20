# whiplash-ui
Whiplash CSS/JS

## Rails Usage

To add Whiplash UI to your rails project, navigate to the root directory and run:
```
yarn add whiplash-ui
```

In your `application.css` add the line:

```
*= require whiplash-ui/dist/whiplash-ui
```

In your `application.js` add the line:

```
//= require whiplash-ui/dist/whiplash-ui
```


## Contributing

To compile the Whiplash UI JS and CSS:
```
yarn run preversion
```

To update the github pages site:
```
yarn run deploy
```

