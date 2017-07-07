const path = require('path')
const watch = require('node-watch');

require('marko/express')
const app = require('express')()
const compression = require('compression')
 

require('marko/node-require').install({
  compilerOptions: {
    writeToDisk: false
  }
})

const isProduction = process.env.NODE_ENV !== 'production'

if (isProduction) {
  let templatesDir = path.join(__dirname, 'routes');
  require('marko/hot-reload').enable()
  watch(templatesDir, { recursive: true }, function(event, filename) {
    if (/\.marko$/.test(filename)) {
      require('marko/hot-reload').handleFileModified(path.join(templatesDir, filename))
      require('lasso').handleWatchedFileChanged(path.join(templatesDir, filename))
    }
  })
}
// Load a Marko view by requiring a .marko file:

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
