const knex = require('knex');

module.exports = (db) => new Promise((resolve, reject) => {
  const tableName = 'emails';
  db.schema.dropTableIfExists(tableName).then(() => {
 
    // Initialize your table
    return db.schema.createTable(tableName, table => {
      table.increments('id');
      table.string('from');
      table.string('title');
      table.string('message');
      table.datetime('time');
    })
    .catch((err)=>console.log(err))
  })


    // .then(() => {
    //   knex('users')
    //     .insert({ email: 'hi@example.com' })

      // resolve()
      // Create a dummy Message
      // db.schema[tableName].insert([
      //   {
      //     from: 'Ramy Al Shurafa',
      //     title: 'Hello World',
      //     message: 'lorem kmvksdv mksd kmds vck vksad vkdsa vkdsa vksad vkads vdsa',
      //     time: Date.now()
      //   }, {
      //     from: 'Ramy Al Shurafa',
      //     title: 'Hello World',
      //     message: 'lorem kmvksdv mksd kmds vck vksad vkdsa vkdsa vksad vkads vdsa',
      //     time: Date.now()
      //   }
      // ]).then(resolve)
      // .catch((err)=>console.log(err))
    // })
    .catch((err)=>console.log(err))




  // db.schema.hasTable(tableName).then(exists => {
  //   if(!exists) {
  //     db.schema.createTable(tableName, table => {
  //       table.increments('id');
  //       table.string('from');
  //       table.string('title');
  //       table.string('message');
  //       table.datetime('time');
  //     })
  //       .then(() => console.log(`Created ${tableName} table`))
  //       .catch(e => console.error(`Error creating ${tableName} table`, e));
  //   }
  // });
  
});
