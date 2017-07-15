const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ganymede_greenfield_2',
    charset: 'utf8'
  }
});

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('users', (park) => {
        users.increments('id').primary();
        users.string('email', 100).notNullable();
        users.string('password', 200).notNullable();
      }).then((table) => {
        console.log('Created "users" Table', table);
      });
  }
});

db.knex.schema.hasTable('timelines').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('timelines', (park) => {
        timelines.increments('id').primary();
        timelines.string('task', 100).notNullable();
        timelines.date('begin_date');
        timelines.date('end_date');
        timelines.string('story', 1000);
      }).then((table) => {
        console.log('Created "timelines" Table', table);
      });
  }
});

db.knex.schema.hasTable('tags').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('tags', (park) => {
        tags.increments('id').primary();
        tags.integer('timeline_id').references('timelines.id')
        tags.string('tag', 200).notNullable();
      }).then((table) => {
        console.log('Created "tags" Table', table);
      });
  }
});

db.knex.schema.hasTable('tags_timelines_join').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('tags_timelines_join', (park) => {
        tags_timelines_join.increments('id').primary();
        tags_timelines_join.integer('timeline_id').references('timelines.id')
        tags_timelines_join.string('tag_id').references('tags.id')
      }).then((table) => {
        console.log('Created "tags_timelines_join" Table', table);
      });
  }
});

db.knex.schema.hasTable('subscriptions').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('subscriptions', (park) => {
        subscriptions.increments('id').primary();
        subscriptions.integer('user_id').references('users.id')
        subscriptions.integer('tag_id').references('tags.id')
      }).then((table) => {
        console.log('Created "users" Table', table);
      });
  }
});

module.exports = db;
