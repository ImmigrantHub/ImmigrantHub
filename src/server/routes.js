
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

  app.get('/event/:userId', (req, res) => {
    Event.where('user_id', parseInt(req.params.userId))
    .fetchAll()
    .then(models => res.send(models))
  })

  app.post('/event', (req, res) => {
    console.log('Create event: ', req.body);
    const {task, end_date, story, beacon } = req.body;
    User.where('email', req.body.email).fetch()
      .then(model => {
        return new Timeline({
          user_id: model.id,
          task,
          begin_date: new Date()
          end_date: end_date || null,
          story: story || null,
          beacon: beacon || null,
        })
        .save()
        .then(model => {
          req.body.tags.forEach(tag => {
            Tag.where('tag', tag)
              .fetch()
              .then(returnTag => {
                if(returnTag) {
                  return new TagTimeline({
                    tag_id: returnTag.id,
                    timeline_id: model.id
                  })
                  .save()
                  .then(model => model)
                } else {
                  return new Tag({tag})
                  .save()
                  .then(newTag => {
                    return new TagTimeline({
                      tag_id: newTag.id,
                      timeline_id: model.id
                    })
                    .save()
                    .then(model => model)
                  })
                }
              })
          })
        })
      })

    // if beacon = true!
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
      // UPDATE FOR TAG CHANGES AND BEACON CHANGES!
  })

  app.post('/tag', (req, res) => {

  })

};

