const Tag = require('./models/tags.js');
const TagTimeline = require('./models/tagTimelines.js');
const Timeline = require('./models/timelines.js');
const User = require('./models/users.js');


module.exports = (app, express) => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/user', (req, res) => {

  })

  app.post('/user', (req, res) => {

  })

  app.get('/users', (req, res) => {

  })

  app.post('/event', (req, res) => {

  })

};
