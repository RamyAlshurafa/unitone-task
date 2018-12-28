/* eslint-disable no-console */
const buildEmailsFakeData = require('./../fake_data/build_emails_data');
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'emails';

  // Check if `emails` table is exsist
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {

      // Call Emails fake data builder function
      buildEmailsFakeData(db)
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
