const db = require('../config.js')
const User = require('./users.js')

const Timeline = db.Model.extend({
  tableName: 'timelines',
  hasTimesstamps: false,
  user: () => this.belongsTo('User')
})

module.exports = Timeline;
