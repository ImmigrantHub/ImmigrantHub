<<<<<<< HEAD

const Tag = require('./models/tags.js');
const TagTimeline = require('./models/tagTimelines.js');
const Timeline = require('./models/timelines.js');
const User = require('./models/users.js');


=======
>>>>>>> Organization
module.exports = (app, express) => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/user', (req, res) => {
    console.log('Get User info: ', req.headers.email)
    User.where('email', req.headers.email)
      .fetch()
      .then(model => {
        Timeline.where('user_id', model.id)
          .fetchAll()
          .then(models => res.send(models))
      })
  })

  app.post('/user', (req, res) => {
    console.log('Create User: ', req.body);
    const {email, password} = req.body;
    return new User({email, password}).save()
    .then(model => res.send(model));
  })

  app.get('/event/:userId', (req, res) => {
    Event.where('user_id', parseInt(req.params.userId))
    .fetchAll()
    .then(models => res.send(models))
  })

  app.post('/event', (req, res) => {
    console.log('Create event: ', req.body);
    const {task, end_date, begin_date, story, beacon } = req.body;
    User.where('email', req.body.email).fetch()
      .then(model => {
        new Timeline({
          user_id: model.id,
          task,
          begin_date: begin_date || new Date(),
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
                  new TagTimeline({
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
                    .then(model => model);
                  })
                }
              })
              .then(model => res.send(model))
          })
        })
      })

    // if beacon = true!
  })

  app.put('/:eventId', (req, res) => {
    console.log('Update event: ', req.body);
     const {task, end_date, begin_date, story, beacon, tags, event_id } = req.body;
    Timeline.where('id', event_id)
      .fetch()
      .then(model => {
        if(!model) {
          res.status(404).send();
        } else {
          console.log('here')
          return model.save({
            user_id: model.id,
            task,
            begin_date: begin_date || new Date(),
            end_date: end_date || null,
            story: story || null,
            beacon: beacon || null,
          }, { patch: true});
        }
      })
      .then(model => {
        res.send(model);
        return model
      })
      .then(model => {
        tags.forEach(tag => {
          Tag.where('tag', tag)
          .fetch()
          .then(model => {
            if(!model) {
              new Tag({tag})
              .save()
              .then(newTag => {
                new TagTimeline({tag_id: newTag.id, timeline_id: event_id})
                .save()
              })
            } else {
              new TagTimeline({tag_id: model.id, timeline_id: event_id})
                .save()
            }
          })
        })
      })
      // UPDATE FOR TAG CHANGES AND BEACON CHANGES!
  })

  app.post('/tag', (req, res) => {

  })

};
 