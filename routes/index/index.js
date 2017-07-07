
var template = require('./template.marko');

module.exports = function(req, res) {
  setTimeout(() => {
    res.marko(template, {
      vessels: [{
        imo: 9632090,
        name: 'Mogens Maersk'
      }, {
        imo: 9220079,
        name: 'SANDY RICKMERS'
      }]
    })
  }, 100);
};
