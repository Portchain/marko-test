require('marko/node-require')
require('marko/express')

const app = require('express')()
 
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

app.use(require('lasso/middleware').serveStatic());
app.get('/', require('./routes/index'));

app.listen(3000, (err) => {
  if(err) console.error(err)
})
