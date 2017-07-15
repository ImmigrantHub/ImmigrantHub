const db = require('../config.js')
const User = require('./users.js')
const Tag = require('./tags.js')

const Subscription = db.Model.extend({
  tableName: 'subscriptions',
  hasTimesstamps: false,
  users: () => this.hasMany(User),
  tags: () => this.hasMany(Tag),
})

module.exports = User;
