const knex = require('knex');
const configuration = require('feathers-configuration');
const debug = require('debug')('Fake-Data');

const { mysql } = configuration()();

const db = knex(mysql);

const emails = require('./emails');
const tableName = 'emails';

const build = (db) => new Promise((resolve, reject) => {
  db.schema.dropTableIfExists(tableName).then(() => {
    db.schema.createTable(tableName, table => {
      table.increments('id');
      table.string('from');
      table.string('title');
      table.text('message', 1000);
      table.datetime('time');
      table.boolean('new').defaultTo(true);
    }).then(()=>{    
      db(tableName).insert(emails).then(resolve).catch(reject);
    });
  });
});

if (process.env.NODE_ENV === 'build') {
  build(db)
    .then(() => {
      debug('Done!: Emails fake data has been built');
      process.exit();
    })
    .catch((err) => {
      debug(`Error!: Error in building Emails fake data \n ${err}`);
    });
} else {
  module.exports = build;
}
