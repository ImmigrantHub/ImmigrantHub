const Promise = require('bluebird');
const db = require('./db-config.js');

const helpers = {
  create: (input, table, cb) => {
    db.query(`INSERT INTO ${table} SET ?`, input, (err, res) => {
      if(err) console.log(err);
      console.log('inserted:', res);
      cb(err, res)
    })
  },

  retrieve: (query, cb) => {
    db.query(query, (err, res)=> {
      if(err) console.log(err);
      cb(err, res)
    })
  },

  update: (update, table, id, cb) => {
    db.query(`UPDATE ${table} SET ? WHERE id=?`, [update, id], (err, res) => {
      if(err) console.log(err);
      console.log('updated:', res.changedRows, 'rows')
      cb(err, res)
    })
  },

  delete: (targetId, table, cb) => {
    db.query(`DELETE FROM ${table} WHERE id=?`, targetId, (err, res) => {
      if(err) console.log(err);
      console.log('deleted:', res.affectedRows, 'rows');
      cb(err, res)
    })
  },

  query: function(q, id) {
    let queries = {
      retrieveUser: `select * from users where users.id = "${id}"`,
    }
    return queries[q];
  }
}

module.exports = {
  create: Promise.promisify(helpers.create),
  retrieve: Promise.promisify(helpers.retrieve),
  update: Promise.promisify(helpers.update),
  delete: Promise.promisify(helpers.delete),
  query: helpers.query
}
