const db = require('../config.js')
const Timeline = require('./timelines.js')
const Subscription = require('./subscriptions.js')

const User = db.Model.extend({
  tableName: 'users',
  hasTimesstamps: false,
  timelines: () => this.hasMany(Timeline),
  subscriptions: () => this.hasMany(Subscription),
})

module.exports = User;
