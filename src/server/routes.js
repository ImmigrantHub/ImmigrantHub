const Tag = require('./models/tags.js');
const TagTimeline = require('./models/tagTimelines.js');
const Timeline = require('./models/timelines.js');
const User = require('./models/users.js');


module.exports = (app, express) => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/user', (req, res) => {
    User.where('email', req.header.email)
      .fetch()
      .then(model => res.send(model))
  })

  app.post('/user', (req, res) => {
    console.log('Create User: ', req.body);
    const userObj = req.body;
    return new User({userObj}).save()
    .then(model => model);
  })

  app.post('/event', (req, res) => {
    console.log('Create event: ', req.body);
    const eventObj = req.body;
    User.where('email', req.body.email).fetch()
      .then(model => {
        return new Timeline({
          user_id: model.id,
          task: eventObj.task,
          begin_date: eventObj.begin_date,
          end_date: eventObj.end_date || null,
          story: eventObj.story,
        })
        .save()
        .then(model => model)
      })
  })

  app.put('/:eventId', (req, res) => {
    console.log('Update event: ', req.body);
    Timeline.where('id', parseInt(req.params.eventId, 10))
      .fetch()
      .then(model => {
        if(!model) {
          res.status(404).send();
        } else {
          return model.save(req.body, { patch: true});
        }
      })
      .then(model => res.send(model));
  })

};
