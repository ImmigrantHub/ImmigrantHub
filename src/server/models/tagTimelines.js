const db = require('../config.js')

const TagTimeline = db.Model.extend({
  tableName: 'tags_timelines_join',
  hasTimesstamps: false,
})

module.exports = TagTimeline;
