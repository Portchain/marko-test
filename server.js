const path = require('path')
const watch = require('node-watch');

require('marko/node-require').install({
  compilerOptions: {
    writeToDisk: false
  }
})

var templatesDir = path.join(__dirname, 'routes');
if (process.env.NODE_ENV !== 'production') {
  // Enable hot reloading in development
  require('marko/hot-reload').enable();

  let files = walkSync(templatesDir).filter((filename) => {
    return /\.marko$/.test(filename)
  })
  watch(templatesDir, { recursive: true }, function(event, filename) {
    if (/\.marko$/.test(filename)) {
      // Resolve the filename to a full template path:

      // Pass along the *full* template path to marko
      files.forEach(filename => {
        require('marko/hot-reload').handleFileModified(filename)
        require('lasso').handleWatchedFileChanged(filename)
      })
    }
  });
}
require('marko/browser-refresh').enable();
require('marko/hot-reload').enable();
require('marko/express')
const app = require('express')()
const compression = require('compression')
 
// Load a Marko view by requiring a .marko file:
var isProduction = false

require('lasso').configure({
    plugins: [
      'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
    ],
    outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
    bundlingEnabled: isProduction, // Only enable bundling in production
    minify: isProduction, // Only minify JS and CSS code in production
    fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
});
app.use(compression())
app.use(require('lasso/middleware').serveStatic());
app.get('/', require('./routes/index'));

app.listen(3000, (err) => {
  if(err) console.error(err)
})

function walkSync(dir, filelist) {
  var fs = fs || require('fs')
  var files = fs.readdirSync(dir)
  filelist = filelist || []
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir,file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist)
    } else {
      filelist.push(path.join(dir, file))
    }
  })
  return filelist
}
