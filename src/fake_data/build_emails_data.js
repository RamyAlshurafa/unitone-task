const knex = require('knex');
const configuration = require('feathers-configuration');
const debug = require('debug')('Fake-Data');

// Get emails array fake data
const emails = require('./emails');

const tableName = 'emails';

// Get mysql options from config file
const { mysql } = configuration()();

// connect to the DB
const db = knex(mysql);

// build Emails fake data
const build = dataBasedb => new Promise((resolve, reject) => {
  // Drop 'Emails' table to reset the DB
  dataBasedb.schema.dropTableIfExists(tableName).then(() => {
    // Create 'Emails' table again
    dataBasedb.schema.createTable(tableName, (table) => {
      // Define "emails" table columns
      table.increments('id');
      table.string('from');
      table.string('title');
      table.text('message', 1000);
      table.datetime('time');
      table.boolean('new').defaultTo(true);
    }).then(() => {
      // insert fake data into 'Emails' column
      db(tableName).insert(emails).then(resolve).catch(reject);
    });
  });
});

// if we run the build function from command line
// run the function
if (process.env.NODE_ENV === 'build') {
  build(db)
    .then(() => {
      debug('Done!: Emails fake data has been built');
      process.exit();
    })
    .catch((err) => {
      debug(`Error!: Error in building Emails fake data \n ${err}`);
    });
  // otherwhise export the function
} else {
  module.exports = build;
}
