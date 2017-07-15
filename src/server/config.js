const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ImmigrantHub',
    charset: 'utf8'
  }
});

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('users', (user) => {
        user.increments('id').primary();
        user.string('email', 100).notNullable();
        user.string('password', 200).notNullable();
      }).then((table) => {
        console.log('Created "users" Table', table);
      });
  }
});

db.knex.schema.hasTable('timelines').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('timelines', (timeline) => {
        timeline.increments('id').primary();
        timeline.integer('user_id').references('user.is')
        timeline.string('task', 100).notNullable();
        timeline.date('begin_date');
        timeline.date('end_date');
        timeline.string('story', 1000);
      }).then((table) => {
        console.log('Created "timelines" Table', table);
      });
  }
});

db.knex.schema.hasTable('tags').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('tags', (tag) => {
        tag.increments('id').primary();
        tag.integer('timeline_id').references('timelines.id')
        tag.string('tag', 200).notNullable();
      }).then((table) => {
        console.log('Created "tags" Table', table);
      });
  }
});

db.knex.schema.hasTable('tags_timelines_join').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('tags_timelines_join', (tagsTimelineJoin) => {
        tagsTimelineJoin.increments('id').primary();
        tagsTimelineJoin.integer('timeline_id').references('timelines.id')
        tagsTimelineJoin.string('tag_id').references('tags.id')
      }).then((table) => {
        console.log('Created "tags_timelines_join" Table', table);
      });
  }
});

db.knex.schema.hasTable('subscriptions').then((exists) => {
  if (!exists) {
      db.knex.schema.createTable('subscriptions', (subscription) => {
        subscription.increments('id').primary();
        subscription.integer('user_id').references('users.id')
        subscription.integer('tag_id').references('tags.id')
      }).then((table) => {
        console.log('Created "users" Table', table);
      });
  }
});

module.exports = db;
