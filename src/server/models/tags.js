const db = require('../config.js')

const Tag = db.Model.extend({
  tableName: 'tags',
  hasTimesstamps: false,
})

module.exports = Tag;
