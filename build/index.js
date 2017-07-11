const sass = require('node-sass');
const fs = require('fs');

const outFile = './build/application.css';


// create a non-minified file

sass.render({
  file: './stylesheets/application.scss',
  outFile
}, (err, data) => {

  if (err) {
    return console.error('error compiling sass: ', err);
  }

  fs.writeFile(outFile, data.css, (error) => {
    if (error) {
      return console.error('error writing file', error);
    }
    return console.log(outFile, ' compiled and written succesfully');
  });

});


// create a minified file

let minFileName = outFile.split('.css');
minFileName = `${ minFileName[0] }.min.css`;

sass.render({
  file: './stylesheets/application.scss',
  outFile: minFileName,
  outputStyle: 'compressed'
}, (err, data) => {

  if (err) {
    return console.error('error compiling sass: ', err);
  }

  fs.writeFile(minFileName, data.css, (error) => {
    if (error) {
      return console.error('error writing file', error);
    }
    return console.log(minFileName, ' compiled and written succesfully');
  });

});
